import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-preview");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce slow delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce slow delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting Badge */}
          <div className="flex justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-blue-200 dark:border-blue-700 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              Available for new opportunities
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hi, I'm
              <br />
              <span className="text-7xl md:text-9xl">Taranjyot Singh</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Software Development Engineer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications and crafting exceptional user experiences. 
            I transform ideas into reality through clean code and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <Button
                size="lg"
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transform hover:scale-105 transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/taranjyot-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transform hover:scale-110 transition-all duration-200"
            >
              <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://linkedin.com/in/taranjyot-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transform hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        >
          <ChevronDown className="h-8 w-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 transition-colors" />
        </button>
      </section>

      {/* Projects Preview Section */}
      <section id="projects-preview" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and passion projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                    Project {i}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Amazing Project {i}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of this incredible project and its impact.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">React</Badge>
                    <Badge variant="secondary" className="text-xs">Node.js</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transform hover:scale-105 transition-all duration-200"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;