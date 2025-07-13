from models import Project, Skill, Biography
from database import database
from datetime import datetime

# Sample projects data
SAMPLE_PROJECTS = [
    {
        "title": "E-Commerce Platform",
        "description": "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
        "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
        "technologies": ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
        "live_demo": "https://ecommerce-demo.example.com",
        "github": "https://github.com/taranjyot-singh/ecommerce-platform",
        "featured": True,
        "category": "Full Stack"
    },
    {
        "title": "AI-Powered Task Manager",
        "description": "Smart task management application with AI-driven priority suggestions and automated scheduling. Built using React, FastAPI, and machine learning algorithms.",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
        "technologies": ["React", "FastAPI", "Python", "TensorFlow", "PostgreSQL"],
        "live_demo": "https://ai-taskmanager.example.com",
        "github": "https://github.com/taranjyot-singh/ai-task-manager",
        "featured": True,
        "category": "AI/ML"
    },
    {
        "title": "Real-Time Chat Application",
        "description": "Modern chat application with real-time messaging, file sharing, and video calls. Features end-to-end encryption and group chat functionality.",
        "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
        "technologies": ["React", "Socket.io", "Express", "WebRTC", "Redis"],
        "live_demo": "https://chatapp-demo.example.com",
        "github": "https://github.com/taranjyot-singh/realtime-chat",
        "featured": True,
        "category": "Real-time"
    },
    {
        "title": "Weather Dashboard",
        "description": "Beautiful weather dashboard with interactive maps, detailed forecasts, and personalized weather alerts. Built with React and integrated with multiple weather APIs.",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
        "technologies": ["React", "TypeScript", "Chart.js", "OpenWeather API"],
        "live_demo": "https://weather-dashboard.example.com",
        "github": "https://github.com/taranjyot-singh/weather-dashboard",
        "featured": False,
        "category": "Frontend"
    },
    {
        "title": "Personal Finance Tracker",
        "description": "Comprehensive finance tracking application with budget planning, expense categorization, and financial insights. Includes secure bank integration.",
        "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
        "technologies": ["React", "Node.js", "MySQL", "Plaid API", "D3.js"],
        "live_demo": "https://finance-tracker.example.com",
        "github": "https://github.com/taranjyot-singh/finance-tracker",
        "featured": False,
        "category": "Full Stack"
    }
]

# Sample skills data
SAMPLE_SKILLS = [
    {
        "category": "Frontend",
        "skills": ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "SASS"]
    },
    {
        "category": "Backend",
        "skills": ["Node.js", "Python", "FastAPI", "Express.js", "Django", "REST APIs"]
    },
    {
        "category": "Database",
        "skills": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
    },
    {
        "category": "DevOps & Tools",
        "skills": ["Docker", "AWS", "Git", "CI/CD", "Nginx", "Linux"]
    },
    {
        "category": "Mobile",
        "skills": ["React Native", "Flutter", "iOS", "Android"]
    }
]

# Sample biography
SAMPLE_BIO = """I'm a passionate Software Development Engineer with over 4 years of experience building scalable web applications and mobile solutions. 

My journey in software development began during my computer science studies, where I discovered the perfect blend of creativity and logic that programming offers. Since then, I've been dedicated to crafting exceptional digital experiences that solve real-world problems.

I specialize in full-stack development with expertise in React, Node.js, and modern web technologies. I'm particularly passionate about creating intuitive user interfaces, optimizing application performance, and implementing robust backend architectures.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I believe in continuous learning and staying updated with the latest industry trends and best practices."""

async def seed_database():
    """Seed the database with sample data"""
    print("Seeding database with sample data...")
    
    # Clear existing data
    await database.db.projects.delete_many({})
    await database.db.skills.delete_many({})
    await database.db.biography.delete_many({})
    
    # Seed projects
    for project_data in SAMPLE_PROJECTS:
        project = Project(**project_data)
        await database.create_project(project)
    print(f"Seeded {len(SAMPLE_PROJECTS)} projects")
    
    # Seed skills
    for skill_data in SAMPLE_SKILLS:
        skill = Skill(**skill_data)
        await database.create_skill_category(skill)
    print(f"Seeded {len(SAMPLE_SKILLS)} skill categories")
    
    # Seed biography
    bio = Biography(content=SAMPLE_BIO)
    await database.create_or_update_biography(bio)
    print("Seeded biography")
    
    print("Database seeding completed!")