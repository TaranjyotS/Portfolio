from pydantic import BaseModel, Field, HttpUrl
from typing import List, Optional
from datetime import datetime
import uuid

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    image: str
    technologies: List[str]
    live_demo: HttpUrl
    github: HttpUrl
    featured: bool = False
    category: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    image: str
    technologies: List[str]
    live_demo: HttpUrl
    github: HttpUrl
    featured: bool = False
    category: str

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image: Optional[str] = None
    technologies: Optional[List[str]] = None
    live_demo: Optional[HttpUrl] = None
    github: Optional[HttpUrl] = None
    featured: Optional[bool] = None
    category: Optional[str] = None

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    read: bool = False

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: str = Field(..., regex=r'^[^@]+@[^@]+\.[^@]+$')
    message: str = Field(..., min_length=10, max_length=1000)

class Skill(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    category: str
    skills: List[str]
    created_at: datetime = Field(default_factory=datetime.utcnow)

class SkillCreate(BaseModel):
    category: str
    skills: List[str]

class Biography(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    content: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class BiographyCreate(BaseModel):
    content: str