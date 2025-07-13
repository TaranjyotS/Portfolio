from fastapi import FastAPI, APIRouter, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import logging
from contextlib import asynccontextmanager
from typing import List, Optional

from models import (
    Project, ProjectCreate, ProjectUpdate,
    ContactMessage, ContactMessageCreate,
    Skill, SkillCreate,
    Biography, BiographyCreate
)
from database import database
from seed_data import seed_database

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await database.connect()
    logger.info("Connected to MongoDB")
    
    # Check if database is empty and seed if needed
    projects_count = await database.db.projects.count_documents({})
    if projects_count == 0:
        await seed_database()
        logger.info("Database seeded with initial data")
    
    yield
    
    # Shutdown
    await database.close()
    logger.info("Disconnected from MongoDB")

# Create the main app
app = FastAPI(title="Portfolio API", version="1.0.0", lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Portfolio API is running", "status": "healthy"}

# Project endpoints
@api_router.get("/projects", response_model=List[Project])
async def get_projects(featured: Optional[bool] = None):
    """Get all projects or only featured projects"""
    try:
        projects = await database.get_projects(featured_only=featured if featured else False)
        return projects
    except Exception as e:
        logger.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch projects"
        )

@api_router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: str):
    """Get a specific project by ID"""
    try:
        project = await database.get_project_by_id(project_id)
        if not project:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Project not found"
            )
        return project
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project {project_id}: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch project"
        )

@api_router.post("/projects", response_model=Project, status_code=status.HTTP_201_CREATED)
async def create_project(project_data: ProjectCreate):
    """Create a new project"""
    try:
        project = Project(**project_data.dict())
        created_project = await database.create_project(project)
        return created_project
    except Exception as e:
        logger.error(f"Error creating project: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create project"
        )

@api_router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: str, project_data: ProjectUpdate):
    """Update an existing project"""
    try:
        existing_project = await database.get_project_by_id(project_id)
        if not existing_project:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Project not found"
            )
        
        update_data = {k: v for k, v in project_data.dict().items() if v is not None}
        updated_project = await database.update_project(project_id, update_data)
        return updated_project
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating project {project_id}: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update project"
        )

@api_router.delete("/projects/{project_id}")
async def delete_project(project_id: str):
    """Delete a project"""
    try:
        success = await database.delete_project(project_id)
        if not success:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Project not found"
            )
        return {"message": "Project deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error deleting project {project_id}: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to delete project"
        )

# Contact endpoints
@api_router.post("/contact", response_model=ContactMessage, status_code=status.HTTP_201_CREATED)
async def submit_contact_form(message_data: ContactMessageCreate):
    """Submit a contact form message"""
    try:
        message = ContactMessage(**message_data.dict())
        created_message = await database.create_contact_message(message)
        logger.info(f"New contact message from {message.email}")
        return created_message
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit contact form"
        )

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages(limit: int = 100):
    """Get all contact messages (admin only in real app)"""
    try:
        messages = await database.get_contact_messages(limit)
        return messages
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch contact messages"
        )

@api_router.patch("/contact/{message_id}/read")
async def mark_message_read(message_id: str):
    """Mark a contact message as read"""
    try:
        success = await database.mark_message_as_read(message_id)
        if not success:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Message not found"
            )
        return {"message": "Message marked as read"}
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error marking message as read: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to mark message as read"
        )

# Skills endpoints
@api_router.get("/skills", response_model=List[Skill])
async def get_skills():
    """Get all technical skills"""
    try:
        skills = await database.get_skills()
        return skills
    except Exception as e:
        logger.error(f"Error fetching skills: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch skills"
        )

@api_router.post("/skills", response_model=Skill, status_code=status.HTTP_201_CREATED)
async def create_skill_category(skill_data: SkillCreate):
    """Create a new skill category"""
    try:
        skill = Skill(**skill_data.dict())
        created_skill = await database.create_skill_category(skill)
        return created_skill
    except Exception as e:
        logger.error(f"Error creating skill category: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create skill category"
        )

@api_router.put("/skills/{category}")
async def update_skill_category(category: str, skills: List[str]):
    """Update skills in a category"""
    try:
        updated_skill = await database.update_skill_category(category, skills)
        if not updated_skill:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Skill category not found"
            )
        return updated_skill
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating skill category {category}: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update skill category"
        )

# Biography endpoints
@api_router.get("/biography", response_model=Biography)
async def get_biography():
    """Get biography content"""
    try:
        bio = await database.get_biography()
        if not bio:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Biography not found"
            )
        return bio
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching biography: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch biography"
        )

@api_router.post("/biography", response_model=Biography)
async def create_or_update_biography(bio_data: BiographyCreate):
    """Create or update biography"""
    try:
        bio = Biography(content=bio_data.content)
        updated_bio = await database.create_or_update_biography(bio)
        return updated_bio
    except Exception as e:
        logger.error(f"Error updating biography: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update biography"
        )

# Include the router in the main app
app.include_router(api_router)