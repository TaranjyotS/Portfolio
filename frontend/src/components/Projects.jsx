import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useProjects } from "../hooks/useProjects";
import { ExternalLink, Github, Filter, Folder, Star } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { projects: allProjects, loading } = useProjects(false);
  
  const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Real-time"];
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const featuredProjects = allProjects.filter(project => project.featured);

  if (loading) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="px-4 py-2 text-sm bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-green-200 dark:border-green-700">
                <Folder className="w-4 h-4 mr-2 text-green-500" />
                My Work
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for development
            </p>
          </section>

          {/* Loading skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg animate-pulse"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-600"></div>
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-green-200 dark:border-green-700">
              <Folder className="w-4 h-4 mr-2 text-green-500" />
              My Work
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for development
          </p>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <Card
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div 
                    className="h-64 bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => window.open(project.live_demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Filter by Category
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    : "hover:bg-blue-50 dark:hover:bg-blue-900/30"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            All Projects ({filteredProjects.length})
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-gray-50 dark:bg-gray-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-800">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 text-xs bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={() => window.open(project.live_demo, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 border-blue-200 dark:border-blue-700 shadow-lg">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects and bring new ideas to life.
              </p>
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Projects;