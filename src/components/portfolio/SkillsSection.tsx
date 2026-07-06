import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Backend & Platform Engineering",
    skills: ["FastAPI", "Flask", "Django", "REST APIs", "Microservices", "Distributed Systems", "Pydantic", "Celery", "Event-Driven Architecture"],
  },
  {
    title: "AI / GenAI",
    skills: ["LLMs", "RAG", "AI Agents", "Agentic Workflows", "Context Engineering", "Prompt Engineering", "Tool Calling", "Embeddings", "Vector Databases", "RLHF", "Model Evaluation", "LLM Observability", "AI Safety", "NLP", "PyTorch", "TensorFlow"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "Terraform", "GitHub Actions", "DevSecOps", "CI/CD"],
  },
  {
    title: "Data Engineering",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Pandas", "NumPy", "ETL Pipelines", "Airflow", "Data Processing"],
  },
  {
    title: "Frontend & Full Stack",
    skills: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "Node.js", "Responsive UI", "API Integration"],
  },
  {
    title: "Software Engineering",
    skills: ["System Design", "Platform Engineering", "Framework Development", "API Design", "Software Architecture", "Release Management", "Agile Development"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Core Expertise</h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of the technologies I use to build backend platforms, AI systems, and cloud-native applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="bg-card/70 border shadow-card transition-smooth hover-lift h-full animate-fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-300 cursor-default">
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
