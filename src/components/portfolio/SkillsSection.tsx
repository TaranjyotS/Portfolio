import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Groovy", "Bash"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Flask", "Django", "TensorFlow", "PyTorch", "NumPy", "Pandas", "Scikit-learn", "OpenCV"],
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, EC2)", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform", "CI/CD", "Linux"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL", "ElasticSearch", "SQL Server"],
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker Desktop", "VS Code", "Postman", "Jira", "Grafana", "Airflow", "DataBricks"],
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300"
    },
    {
      title: "Concepts & Methodologies",
      skills: ["OOP", "Data Structures", "Software Architecture", "Agile Development", "ETL Processes", "Microservices"],
      color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
    }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Technical Skills
          </h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies for building robust, scalable applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card border shadow-card transition-smooth hover-lift h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;