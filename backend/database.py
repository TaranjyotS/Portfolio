from motor.motor_asyncio import AsyncIOMotorClient
import os
from typing import List
from datetime import datetime
from models import Project, ContactMessage, Skill, Biography

class Database:
    def __init__(self):
        self.client = None
        self.db = None

    async def connect(self):
        mongo_url = os.environ['MONGO_URL']
        self.client = AsyncIOMotorClient(mongo_url)
        self.db = self.client[os.environ['DB_NAME']]

    async def close(self):
        if self.client:
            self.client.close()

    # Project operations
    async def create_project(self, project: Project) -> Project:
        result = await self.db.projects.insert_one(project.dict())
        return project

    async def get_projects(self, featured_only: bool = False) -> List[Project]:
        query = {"featured": True} if featured_only else {}
        cursor = self.db.projects.find(query).sort("created_at", -1)
        projects = await cursor.to_list(None)
        return [Project(**project) for project in projects]

    async def get_project_by_id(self, project_id: str) -> Project:
        project = await self.db.projects.find_one({"id": project_id})
        if project:
            return Project(**project)
        return None

    async def update_project(self, project_id: str, project_data: dict) -> Project:
        project_data["updated_at"] = datetime.utcnow()
        await self.db.projects.update_one({"id": project_id}, {"$set": project_data})
        return await self.get_project_by_id(project_id)

    async def delete_project(self, project_id: str) -> bool:
        result = await self.db.projects.delete_one({"id": project_id})
        return result.deleted_count > 0

    # Contact message operations
    async def create_contact_message(self, message: ContactMessage) -> ContactMessage:
        result = await self.db.contact_messages.insert_one(message.dict())
        return message

    async def get_contact_messages(self, limit: int = 100) -> List[ContactMessage]:
        cursor = self.db.contact_messages.find().sort("created_at", -1).limit(limit)
        messages = await cursor.to_list(limit)
        return [ContactMessage(**message) for message in messages]

    async def mark_message_as_read(self, message_id: str) -> bool:
        result = await self.db.contact_messages.update_one(
            {"id": message_id}, 
            {"$set": {"read": True}}
        )
        return result.modified_count > 0

    # Skills operations
    async def create_skill_category(self, skill: Skill) -> Skill:
        result = await self.db.skills.insert_one(skill.dict())
        return skill

    async def get_skills(self) -> List[Skill]:
        cursor = self.db.skills.find().sort("category", 1)
        skills = await cursor.to_list(None)
        return [Skill(**skill) for skill in skills]

    async def update_skill_category(self, category: str, skills: List[str]) -> Skill:
        await self.db.skills.update_one(
            {"category": category}, 
            {"$set": {"skills": skills}}, 
            upsert=True
        )
        skill_doc = await self.db.skills.find_one({"category": category})
        return Skill(**skill_doc) if skill_doc else None

    # Biography operations
    async def create_or_update_biography(self, bio: Biography) -> Biography:
        existing = await self.db.biography.find_one({})
        if existing:
            bio.id = existing["id"]
            await self.db.biography.update_one(
                {"id": existing["id"]}, 
                {"$set": bio.dict()}
            )
        else:
            await self.db.biography.insert_one(bio.dict())
        return bio

    async def get_biography(self) -> Biography:
        bio = await self.db.biography.find_one({})
        return Biography(**bio) if bio else None

# Global database instance
database = Database()