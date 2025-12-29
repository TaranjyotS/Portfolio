import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  
  if (description.length <= maxLength) {
    return <p className="text-muted-foreground mb-4">{description}</p>;
  }
  
  return (
    <div className="mb-4">
      <p className="text-muted-foreground">
        {isExpanded ? description : `${description.slice(0, maxLength)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-2 text-primary hover:underline text-sm font-medium"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </p>
    </div>
  );
};

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

const ProjectsSection = () => {
  const [githubProjects, setGithubProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [publicationsCurrentSlide, setPublicationsCurrentSlide] = useState(0);
  
  const publications = [
    {
      title: "RDBMS Analysis for Big Data using ElasticSearch",
      journal: "IJRECE",
      year: "2022",
      description: "Research on studying Big Data with ElasticSearch for quicker data access.",
      tags: ["ElasticSearch", "Big Data", "RDBMS"],
      link: "https://i2or-ijrece.com",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=250&fit=crop" // Building with wavy lines
    }
  ];
  
  // Prioritized projects list with excluded repositories filtered out
  const prioritizedProjects = [
    'face-recognition',
    'ocr',
    'mlops-ci-cd',
    'pca-for-diagnosis-of-heart-disease',
    'traffic-management-using-quality-methodologies',
    'design-improvement-and-quality-control-of-boeing-737-max-aircraft'
  ];

  // Filter and sort projects with priority order
  const filteredProjects = githubProjects
    .filter(repo => !['portfolio', 'TaranjyotS', 'web-server-hacking', 'resume-api'].includes(repo.name))
    .sort((a, b) => {
      // Move Bridge project to last
      if (a.name === 'bridge') return 1;
      if (b.name === 'bridge') return -1;
      
      const aIndex = prioritizedProjects.indexOf(a.name);
      const bIndex = prioritizedProjects.indexOf(b.name);
      
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return 0;
    })
    .map((project, index) => ({
      ...project,
      category: getCategoryForProject(project.name, project.topics),
      image: getUniqueImageForProject(project.name, index)
    }));
  
  const totalPublicationSlides = Math.ceil(publications.length / 3);
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);
  
  // Helper function to categorize projects
  function getCategoryForProject(name: string, topics: string[]): string {
    const nameAndTopics = [name.toLowerCase(), ...topics.map(t => t.toLowerCase())];
    
    if (nameAndTopics.some(item => ['docker', 'kubernetes', 'jenkins', 'aws', 'azure', 'cloud', 'devops', 'ci-cd', 'terraform'].includes(item))) {
      return 'cloud-devops';
    }
    if (nameAndTopics.some(item => ['data', 'ml', 'ai', 'analysis', 'pipeline', 'etl', 'bigdata'].includes(item))) {
      return 'data-engineering';
    }
    if (nameAndTopics.some(item => ['architecture', 'system', 'microservice', 'distributed', 'scalable'].includes(item))) {
      return 'system-architecture';
    }
    return 'full-stack-development';
  }
  
  // Helper function to get unique project images
  function getUniqueImageForProject(name: string, index: number): string {
    const projectImages = [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop', // OCR/Document scanning (swapped for OCR)
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop', // Face recognition/AI (swapped for FaceRecognition)
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop', // Quality/Analytics
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop', // Data pipeline
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop', // Microservices
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop', // Cloud infrastructure
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop', // General coding
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop', // Web development
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop', // Mobile development
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop', // Database/Backend
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop', // DevOps
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop', // Security
    ];
    
    return projectImages[index % projectImages.length];
  }
  
  // Helper function to get category display name and color
  function getCategoryInfo(category: string) {
    const categories = {
      'full-stack-development': { name: 'Full-Stack Development', color: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
      'data-engineering': { name: 'Data Engineering', color: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
      'cloud-devops': { name: 'Cloud & DevOps', color: 'bg-green-500/10 text-green-600 border-green-500/20' },
      'system-architecture': { name: 'System Architecture', color: 'bg-orange-500/10 text-orange-600 border-orange-500/20' }
    };
    
    return categories[category as keyof typeof categories] || categories['full-stack-development'];
  }
  
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/TaranjyotS/repos?sort=updated&per_page=30');
        if (response.ok) {
          const repos = await response.json();
          setGithubProjects(repos.filter((repo: GitHubRepo) => !repo.name.includes('.github')));
        }
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my projects and publications showcasing innovative solutions and research contributions.
          </p>
        </div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 p-1">
            <TabsTrigger value="projects" className="text-sm font-medium">Projects</TabsTrigger>
            <TabsTrigger value="publications" className="text-sm font-medium">Publications</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => {
                const categoryInfo = getCategoryInfo(project.category);
                return (
                  <Card key={index} className="group hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative w-full h-32 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {project.name}
                      </CardTitle>
                      <p className="text-muted-foreground">{categoryInfo.name}</p>
                    </CardHeader>
                    <CardContent>
                      <ProjectDescription description={project.description || "No description available"} />
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.language && (
                          <Badge variant="outline" className="text-xs">{project.language}</Badge>
                        )}
                        {project.topics?.slice(0, 2).map((topic) => (
                          <Badge key={topic} variant="outline" className="text-xs">{topic}</Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.html_url && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.homepage && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {filteredProjects.length > 3 && (
              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="px-8 py-3 rounded-full hover-scale transition-all duration-300"
                >
                  {showAllProjects ? 'Show Less' : `View All Projects (${filteredProjects.length})`}
                  <ChevronRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="publications" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publications.map((publication, index) => (
                <Card key={index} className="group hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="relative w-full h-32 overflow-hidden">
                    <img 
                      src={publication.image} 
                      alt={publication.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {publication.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{publication.journal} • {publication.year}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{publication.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={publication.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Publication
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;