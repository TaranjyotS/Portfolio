import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { useSkills } from "../hooks/useSkills";
import { useBiography } from "../hooks/useBiography";
import { Code, Database, Server, Smartphone, Cloud, User, Sparkles } from "lucide-react";

const About = () => {
  const { skills, loading: skillsLoading } = useSkills();
  const { biography, loading: bioLoading } = useBiography();

  const skillIcons = {
    Frontend: <Code className="h-6 w-6" />,
    Backend: <Server className="h-6 w-6" />,
    Database: <Database className="h-6 w-6" />,
    "DevOps & Tools": <Cloud className="h-6 w-6" />,
    Mobile: <Smartphone className="h-6 w-6" />
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-700">
              <User className="w-4 h-4 mr-2 text-purple-500" />
              About Me
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-6">
            My Story
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building the future, one line of code at a time
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 border-purple-200 dark:border-purple-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-6 w-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Who I Am
                  </h2>
                </div>
                {bioLoading ? (
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
                    ))}
                  </div>
                ) : (
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {biography?.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Profile Image Placeholder */}
          <div className="lg:col-span-1">
            <Card className="h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mb-6 flex items-center justify-center shadow-2xl">
                  <User className="h-24 w-24 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Taranjyot Singh
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Software Development Engineer
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    4+ Years Experience
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          {skillsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card
                  key={i}
                  className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg animate-pulse"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg mr-3"></div>
                      <div className="h-6 w-24 bg-gray-300 dark:bg-gray-600 rounded"></div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillCategory, index) => (
                <Card
                  key={skillCategory.category}
                  className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-3 group-hover:scale-110 transition-transform duration-200">
                        {skillIcons[skillCategory.category]}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {skillCategory.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Fun Facts Section */}
        <section className="mt-20">
          <Card className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 dark:from-yellow-900/20 dark:via-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-700 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Fun Facts About Me
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    50+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Projects Completed
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                    15+
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Technologies Mastered
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Passionate About Code
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;