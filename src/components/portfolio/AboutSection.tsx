import { Brain, Cloud, Code2, GitBranch, ShieldCheck, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const focusAreas = [
  { icon: Brain, title: "Generative AI Systems", description: "LLM evaluation, RAG, prompt engineering, RLHF, model quality workflows, and AI-assisted products." },
  { icon: Code2, title: "Backend Platforms", description: "Python, FastAPI, Flask, REST APIs, Pydantic, microservices, and scalable service design." },
  { icon: Cloud, title: "Cloud-Native Engineering", description: "AWS, Docker, Kubernetes, CI/CD, deployment automation, and production-ready infrastructure." },
  { icon: Workflow, title: "MLOps & Data Platforms", description: "MLflow, DVC, data validation, ETL pipelines, observability, and model lifecycle workflows." },
  { icon: ShieldCheck, title: "DevSecOps", description: "Secure delivery, Bandit, automated quality gates, testing, and defensive engineering practices." },
  { icon: GitBranch, title: "System Design", description: "Distributed systems, API gateways, platform architecture, resilience patterns, and clean documentation." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12 bg-card border shadow-card transition-smooth hover-lift">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground">
                Senior Software Engineer with <strong className="text-primary">5+ years of experience</strong> building cloud-native backend platforms, AI-powered applications, and 
                scalable distributed systems across Financial Services, Travel Technology, and Generative AI domains. Specialized in Python, 
                FastAPI, AWS, Kubernetes, Docker, CI/CD, and modern software architecture, with hands-on experience developing enterprise 
                backend platforms and production-ready AI applications. Proven expertise in LLM evaluation, RLHF, prompt engineering, 
                RAG, AI agent workflows, context engineering, backend platform development, data engineering, and production-grade AI 
                systems. Passionate about building reliable, scalable AI-powered software that combines strong engineering fundamentals with 
                modern Generative AI capabilities to solve complex real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {focusAreas.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="bg-card/80 border shadow-card transition-smooth hover-lift h-full">
              <CardContent className="p-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4"><Icon className="w-6 h-6" /></div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
