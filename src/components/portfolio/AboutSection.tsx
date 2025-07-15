import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Python, JavaScript, TypeScript with modern frameworks"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      description: "AWS, Azure, Kubernetes, Docker, CI/CD with Jenkins"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "ETL pipelines, Big Data processing, ML/AI systems"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "System Architecture",
      description: "Scalable microservices, design patterns, performance optimization"
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 bg-card border shadow-card transition-smooth hover-lift">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground">
                Experienced Software Engineer with <strong className="text-primary">4+ years of hands-on experience</strong> in 
                Python development, backend systems, and full-stack web development. Proven track record of building 
                scalable, production-grade applications leveraging cloud platforms (AWS, Azure), Kubernetes, and CI/CD 
                automation with Jenkins.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-foreground">
                Proficient in design patterns, software architecture, functional programming paradigms, and financial 
                data applications. Demonstrates a passion for innovation, continuous learning, and delivering high-impact 
                solutions in fast-paced, agile environments.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-card border shadow-card transition-smooth hover-lift group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;