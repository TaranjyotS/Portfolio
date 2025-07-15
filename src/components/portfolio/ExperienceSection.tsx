import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Building, Briefcase, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const professionalExperiences = [
    {
      title: "Software Development Engineer",
      company: "Anuvu",
      location: "Montreal, QC, Canada",
      duration: "June 2022 - May 2024",
      achievements: [
        "Led the initiative to implement a Jenkins CI/CD pipeline with Jenkins, automating the testing and deployment process of applications on AWS instances as a backend and framework developer in a team of 5.",
        "Developed modules for data transformation and analysis using SAS, Pandas, and Airflow, ensuring the efficient and effective use of data within our microservices.",
        "Contributed significantly to the development, unit testing and integration of Kubernetes and Docker for the orchestration of our 6 scalable microservices, achieving 87% code coverage through extensive unit testing.",
        "Oversaw the official releases for 3 of the live products.",
        "Monitored testing for over 25 games on platforms like PlayCanvas, PixiJs."
      ],
      techStack: ["Python", "Pandas", "Numpy", "Pytest", "REST", "HTML5", "JavaScript", "Node.js", "Git", "OOP", "TypeScript", "MySQL", "AWS S3", "AWS EC2", "DataBricks", "Bash", "BitBucket", "Airflow", "CI/CD", "Kubernetes", "Docker", "Jenkins", "JIRA", "Confluence", "Groovy", "Postman", "SAS", "SQL Server", "Unit-Testing", "TensorFlow", "PyTorch", "Mock"]
    },
    {
      title: "Software Development Engineer",
      company: "Solut Pvt. Ltd.",
      location: "Calgary, AB, Canada",
      duration: "Oct. 2021 - May 2022",
      achievements: [
        "Developed a full-stack Flask-based financial platform handling over a million secure records.",
        "Integrated backend services with MongoDB, Azure Database, and AWS Lambda for serverless processing.",
        "Collaborated with clients to gather their specific requirements and ensure the application met their needs.",
        "Conducted extensive unit and integration testing using Pytest to ensure application reliability and functionality."
      ],
      techStack: ["Python", "Pandas", "Flask", "Jupyter Notebook", "PyCharm", "TensorFlow", "Azure Database", "MySQL", "NoSQL", "Git", "Github", "CI/CD pipelines", "Docker", "AWS", "Kubernetes", "Javascript", "JQuery", "React", "HTML", "Pytest"]
    },
    {
      title: "Software Development Intern",
      company: "Kyrion Technologies",
      location: "New Delhi, DL, India",
      duration: "May 2018 - Dec. 2018",
      achievements: [
        "Built an AI-based OpenCV-driven digit recognition system achieving 90% accuracy.",
        "Deployed a Python utility leveraging the usage of OpenCV to train a version on a dataset of 500 handwritten digits as part of a software program development group.",
        "Applied TensorFlow and PyTorch models on annotated datasets for real-time prediction use cases."
      ],
      techStack: ["Git", "Jupyter Notebook", "Python", "Pytest", "PyTorch", "TensorFlow", "Postgres Database", "Docker"]
    },
    {
      title: "Software Development Intern",
      company: "Trip String",
      location: "New Delhi, DL, India",
      duration: "June 2017 - Jan. 2018",
      achievements: [
        "Designed and implemented a travel website which utilized user input to automatically rank and present alternative trip packages based on the filters supplied by the user.",
        "Managed the website's cloud deployment using Linux servers and automated updates using Bash scripting."
      ],
      techStack: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Bash", "Linux", "Python"]
    }
  ];

  const freelancingExperiences = [
    {
      title: "Software Engineer - AI Training",
      company: "Freelance",
      location: "Remote",
      duration: "2024 - Present",
      achievements: [
        "Trained and fine-tuned AI models using Reinforcement Learning with Human Feedback (RLHF).",
        "Evaluated AI-generated responses for clarity, accuracy, and relevance using decision matrices and structured rubrics.",
        "Rewrote and enhanced AI outputs to ensure precision and alignment with user intent.",
        "Designed and solved complex coding problems, along with creating robust test cases to validate code performance.",
        "Assessed the quality of AI-generated code and provided clear, justified feedback.",
        "Ranked and compared LLM responses to guide model optimization and behavior fine-tuning.",
        "Standardized evaluation workflows to ensure consistent, high-quality feedback.",
        "Developed and revised prompts and outputs, integrating factual accuracy and research-driven insights.",
        "Conducted quality assurance checks focusing on factuality, contextual relevance, and ethical compliance.",
        "Delivered actionable feedback to improve the overall usability and effectiveness of AI systems."
      ],
      techStack: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "AI Training", "RLHF", "Natural Language Processing", "Model Optimization", "Quality Assurance", "Prompt Engineering", "Data Analysis", "Research", "Testing"]
    }
  ];

  const renderExperienceCard = (exp: any, index: number, prefix: string) => {
    const isExpanded = expandedItems[`${prefix}-${index}`];
    const isSkillsExpanded = expandedItems[`${prefix}-${index}-skills`];
    const visibleAchievements = isExpanded ? exp.achievements : exp.achievements.slice(0, 2);
    const visibleSkills = isSkillsExpanded ? exp.techStack : exp.techStack.slice(0, 5);
    const hasMore = exp.achievements.length > 2;
    const hasMoreSkills = exp.techStack.length > 5;

    return (
      <div 
        key={index} 
        className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        {/* Timeline dot */}
        <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
        
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
          <Card className="group hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar size={16} />
                <span>{exp.duration}</span>
              </div>
              <CardTitle className="text-xl mb-2 text-card-foreground group-hover:text-primary transition-colors">
                {exp.title}
              </CardTitle>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building size={16} />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {visibleAchievements.map((achievement: string, achIndex: number) => (
                  <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {hasMore && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleExpanded(`${prefix}-${index}`)}
                  className="mb-4 text-primary hover:text-primary/80"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Read More
                    </>
                  )}
                </Button>
              )}
              
              <div className="flex flex-wrap gap-1">
                {visibleSkills.map((tech: string, techIndex: number) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {hasMoreSkills && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleExpanded(`${prefix}-${index}-skills`)}
                  className="mt-2 text-primary hover:text-primary/80"
                >
                  {isSkillsExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-1" />
                      Show Less Skills
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-1" />
                      Show More Skills ({exp.techStack.length - 5} more)
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Work Experience
          </h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey building scalable applications and leading technical initiatives across diverse industries.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="professional" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 p-1">
              <TabsTrigger value="professional" className="text-sm font-medium">
                <Briefcase className="w-4 h-4 mr-2" />
                Professional
              </TabsTrigger>
              <TabsTrigger value="freelancing" className="text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                Freelancing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="professional" className="space-y-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                {professionalExperiences.map((exp, index) => renderExperienceCard(exp, index, 'prof'))}
              </div>
            </TabsContent>
            
            <TabsContent value="freelancing" className="space-y-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                {freelancingExperiences.map((exp, index) => renderExperienceCard(exp, index, 'free'))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;