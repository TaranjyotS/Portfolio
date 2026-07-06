import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectCategory = "AI" | "Backend" | "Cloud" | "Data" | "Security" | "Finance";

type Project = {
  name: string;
  focus: string;
  description: string;
  image: string;
  repo: string;
  demo?: string;
  readme: string;
  tags: string[];
  category: ProjectCategory;
};

const projects: Project[] = [
  {
    name: "Resume AI Platform",
    focus: "GenAI • RAG • FastAPI • React",
    description: "AI-powered full-stack platform for generating ATS-optimized resumes, tailored cover letters, recruiter emails, LinkedIn messages, and interview prep packages.",
    image: "/projects/resume-ai-platform.svg",
    repo: "https://github.com/TaranjyotS/resume-api",
    demo: "https://resume-api-taranjyot-singh.vercel.app",
    readme: "https://github.com/TaranjyotS/resume-api#readme",
    tags: ["FastAPI", "React", "Ollama", "JWT", "Docker"],
    category: "AI",
  },
  {
    name: "Smart Budget Allocator",
    focus: "Finance • FastAPI • React",
    description: "Full-stack personal finance and Canadian tax planning platform for income, expenses, budgeting, goals, asset allocation, and TFSA/FHSA/RRSP planning.",
    image: "/projects/smart-budget-allocator.svg",
    repo: "https://github.com/TaranjyotS/smart-budget-allocator",
    demo: "https://smart-budget-allocator.vercel.app",
    readme: "https://github.com/TaranjyotS/smart-budget-allocator#readme",
    tags: ["FastAPI", "React", "Finance", "Tax Planning", "Charts"],
    category: "Finance",
  },
  {
    name: "Offer Intelligence Platform",
    focus: "ML Orchestration • Real-Time Analytics",
    description: "Enterprise-grade ML offer orchestration platform for loyalty decisioning, predictive scoring, secure transactions, and real-time analytics.",
    image: "/projects/offer-intelligence-platform.svg",
    repo: "https://github.com/TaranjyotS/offer-intelligence-platform",
    demo: "https://offer-intelligence-platform.vercel.app/",
    readme: "https://github.com/TaranjyotS/offer-intelligence-platform#readme",
    tags: ["Python", "FastAPI", "ML", "Analytics", "Transactions"],
    category: "Finance",
  },
  {
    name: "Web Security Auditor",
    focus: "Security • OWASP • .NET 8",
    description: "Defensive web security auditing platform for authorized DNS, HTTP header, SSL/TLS, certificate health, and controlled port exposure checks.",
    image: "/projects/web-security-auditor.svg",
    repo: "https://github.com/TaranjyotS/web-security-auditor",
    readme: "https://github.com/TaranjyotS/web-security-auditor#readme",
    tags: [".NET 8", "Blazor", "SQLite", "Docker", "Security"],
    category: "Security",
  },
  {
    name: "MLOps CI/CD Platform",
    focus: "MLOps • MLflow • DVC",
    description: "Production-ready MLOps framework automating data validation, model training, experiment tracking, versioned pipelines, and CI/CD quality gates.",
    image: "/projects/mlops-ci-cd.svg",
    repo: "https://github.com/TaranjyotS/mlops-ci-cd",
    readme: "https://github.com/TaranjyotS/mlops-ci-cd#readme",
    tags: ["MLflow", "DVC", "FastAPI", "Docker", "GitHub Actions"],
    category: "Data",
  },
  {
    name: "Real-Time Financial Analytics Platform",
    focus: "Streaming • Analytics • Finance",
    description: "Financial analytics platform focused on real-time metrics, backend APIs, event-style workflows, dashboards, testing, and CI/CD readiness.",
    image: "/projects/real-time-financial-analytics-platform.svg",
    repo: "https://github.com/TaranjyotS/real-time-financial-analytics-platform",
    readme: "https://github.com/TaranjyotS/real-time-financial-analytics-platform#readme",
    tags: ["FastAPI", "Analytics", "Finance", "CI/CD", "Docker"],
    category: "Finance",
  },
  {
    name: "Multi-Agent AI Workflow Platform",
    focus: "Agents • LangGraph • Automation",
    description: "Agentic AI workflow platform demonstrating multi-step orchestration, tool-style execution, API workflows, and automation patterns.",
    image: "/projects/multi-agent-ai-workflow-platform.svg",
    repo: "https://github.com/TaranjyotS/multi-agent-ai-workflow-platform",
    readme: "https://github.com/TaranjyotS/multi-agent-ai-workflow-platform#readme",
    tags: ["Python", "FastAPI", "LangGraph", "Agents", "Workflows"],
    category: "AI",
  },
  {
    name: "Distributed API Gateway",
    focus: "Routing • Resilience • Microservices",
    description: "Microservices gateway covering routing, downstream integration, request forwarding, resiliency, and production-style API architecture.",
    image: "/projects/distributed-api-gateway.svg",
    repo: "https://github.com/TaranjyotS/distributed-api-gateway",
    readme: "https://github.com/TaranjyotS/distributed-api-gateway#readme",
    tags: ["FastAPI", "Microservices", "Routing", "Docker", "System Design"],
    category: "Backend",
  },
  {
    name: "Cloud-Native SaaS Platform",
    focus: "SaaS • DevOps • Kubernetes",
    description: "Cloud-native SaaS platform showcasing backend services, tenant-aware architecture, CI/CD, security checks, Docker, and deployment-ready practices.",
    image: "/projects/cloud-native-saas-platform.svg",
    repo: "https://github.com/TaranjyotS/cloud-native-saas-platform",
    readme: "https://github.com/TaranjyotS/cloud-native-saas-platform#readme",
    tags: ["Python", "SaaS", "Docker", "Kubernetes", "CI/CD"],
    category: "Cloud",
  },
  {
    name: "Data Engineering Pipeline Platform",
    focus: "ETL • Airflow • Data Quality",
    description: "Data platform demonstrating ingestion, validation, lineage, warehouse-style tables, dashboarding, and pipeline quality checks.",
    image: "/projects/data-engineering-pipeline-platform.svg",
    repo: "https://github.com/TaranjyotS/data-engineering-pipeline-platform",
    readme: "https://github.com/TaranjyotS/data-engineering-pipeline-platform#readme",
    tags: ["FastAPI", "Airflow", "PostgreSQL", "ETL", "Data Quality"],
    category: "Data",
  },
  {
    name: "Facial Emotion Recognition Platform",
    focus: "Computer Vision • Deep Learning",
    description: "Computer vision platform for emotion classification using deep learning workflows, model training, evaluation, and application-oriented documentation.",
    image: "/projects/facial-emotion-recognition-platform.svg",
    repo: "https://github.com/TaranjyotS/facial-emotion-recognition-platform",
    readme: "https://github.com/TaranjyotS/facial-emotion-recognition-platform#readme",
    tags: ["Python", "TensorFlow", "Computer Vision", "CNN", "ML"],
    category: "AI",
  },
  {
    name: "Aerospace Quality Risk Analytics",
    focus: "Aviation • Risk • Analytics",
    description: "Aerospace analytics project focused on quality risk indicators, structured analysis, insights, and engineering-style reporting.",
    image: "/projects/aerospace-quality-risk-analytics.svg",
    repo: "https://github.com/TaranjyotS/aerospace-quality-risk-analytics",
    readme: "https://github.com/TaranjyotS/aerospace-quality-risk-analytics#readme",
    tags: ["Python", "Analytics", "Risk", "Aerospace", "Quality"],
    category: "Data",
  },
  {
    name: "Traffic Quality Analytics Platform",
    focus: "Traffic • Quality • Dashboards",
    description: "Analytics platform for traffic-quality signals, quality monitoring, metric analysis, dashboarding, and decision-support workflows.",
    image: "/projects/traffic-quality-analytics-platform.svg",
    repo: "https://github.com/TaranjyotS/traffic-quality-analytics-platform",
    readme: "https://github.com/TaranjyotS/traffic-quality-analytics-platform#readme",
    tags: ["Python", "Analytics", "Dashboards", "Quality", "Data"],
    category: "Data",
  },
  {
    name: "OCR Digit Recognition Platform",
    focus: "OCR • Computer Vision • ML",
    description: "OCR digit recognition project built around handwritten digit classification, computer vision, model training, and prediction workflows.",
    image: "/projects/ocr-digit-recognition-platform.svg",
    repo: "https://github.com/TaranjyotS/ocr-digit-recognition-platform",
    readme: "https://github.com/TaranjyotS/ocr-digit-recognition-platform#readme",
    tags: ["Python", "OpenCV", "OCR", "TensorFlow", "ML"],
    category: "AI",
  },
  {
    name: "Heart Disease Risk ML Platform",
    focus: "Healthcare • ML • Risk Scoring",
    description: "Machine learning platform for heart disease risk prediction, model evaluation, feature analysis, and healthcare analytics demonstration.",
    image: "/projects/heart-disease-risk-ml-platform.svg",
    repo: "https://github.com/TaranjyotS/heart-disease-risk-ml-platform",
    readme: "https://github.com/TaranjyotS/heart-disease-risk-ml-platform#readme",
    tags: ["Python", "ML", "Healthcare", "Risk", "Analytics"],
    category: "AI",
  },
  {
    name: "Portfolio Website",
    focus: "React • TypeScript • Personal Brand",
    description: "Modern portfolio website presenting backend, AI, cloud, data, and security projects with a recruiter-friendly product-engineering layout.",
    image: "/projects/portfolio.svg",
    repo: "https://github.com/TaranjyotS/portfolio",
    demo: "https://portfolio-taranjyot-singh.vercel.app",
    readme: "https://github.com/TaranjyotS/portfolio#readme",
    tags: ["React", "TypeScript", "Tailwind", "Vite", "Portfolio"],
    category: "Cloud",
  },
];

const categories = ["All", "AI", "Backend", "Cloud", "Data", "Security", "Finance"];

const publications = [
  {
    title: "RDBMS Analysis for Big Data using Elasticsearch",
    journal: "IJRECE, Vol. 7, Issue 2",
    year: "2019",
    description: "Published research exploring Elasticsearch-based search architectures for Big Data analytics, focusing on indexing, sharding, inverted indexes, and full-text search optimization for scalable data platforms.",
    tags: ["Elasticsearch", "Big Data", "RDBMS", "Search Architecture"],
    link: "https://i2or-ijrece.com",
    image: "/projects/research-elasticsearch.svg",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const filteredProjects = useMemo(() => activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory), [activeCategory]);
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(startIndex, startIndex + 3);

  const move = (direction: "left" | "right") => {
    if (direction === "left") setStartIndex((value) => Math.max(0, value - 1));
    if (direction === "right") setStartIndex((value) => Math.min(Math.max(0, filteredProjects.length - 3), value + 1));
  };

  const resetFilter = (category: string) => { setActiveCategory(category); setStartIndex(0); setShowAll(false); };

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Production-style projects across AI, backend engineering, cloud architecture, data systems, security, and finance.</p>
        </div>

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 p-1">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => <Button key={category} variant={activeCategory === category ? "default" : "outline"} size="sm" onClick={() => resetFilter(category)}>{category}</Button>)}
            </div>

            <div className="flex items-center justify-center gap-4">
              {!showAll && <Button variant="outline" size="icon" onClick={() => move("left")} disabled={startIndex === 0}><ChevronLeft className="w-4 h-4" /></Button>}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 flex-1 max-w-6xl">
                {visibleProjects.map((project) => (
                  <Card
                    key={project.name}
                    role="link"
                    tabIndex={0}
                    onClick={() => window.open(project.repo, "_blank", "noopener,noreferrer")}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") window.open(project.repo, "_blank", "noopener,noreferrer");
                    }}
                    className="group hover-lift transition-all duration-300 bg-card border border-border overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-muted"><img src={project.image} alt={`${project.name} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /><Badge className="absolute top-4 left-4 bg-slate-950/80 text-white border-white/20 backdrop-blur-sm">{project.category}</Badge></div>
                    <CardHeader><CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{project.name}</CardTitle><p className="text-primary font-medium">{project.focus}</p></CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-5 leading-relaxed line-clamp-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-5">{project.tags.map((tag) => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}</div>
                      <div className="flex flex-wrap gap-2" onClick={(event) => event.stopPropagation()}>
                        <Button variant="outline" size="sm" asChild><a href={project.repo} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2" /> Code</a></Button>
                        {project.demo && <Button variant="outline" size="sm" asChild><a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Live Demo</a></Button>}
                        <Button variant="outline" size="sm" asChild><a href={project.readme} target="_blank" rel="noopener noreferrer"><FileText className="w-4 h-4 mr-2" /> README</a></Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {!showAll && <Button variant="outline" size="icon" onClick={() => move("right")} disabled={startIndex >= filteredProjects.length - 3}><ChevronRight className="w-4 h-4" /></Button>}
            </div>
            <div className="text-center"><Button variant="outline" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Featured 3" : `View All Projects (${filteredProjects.length})`}</Button></div>
          </TabsContent>

          <TabsContent value="research">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {publications.map((publication) => (
                <Card
                  key={publication.title}
                  role="link"
                  tabIndex={0}
                  onClick={() => window.open(publication.link, "_blank", "noopener,noreferrer")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") window.open(publication.link, "_blank", "noopener,noreferrer");
                  }}
                  className="group hover-lift bg-card border border-border overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-muted"><img src={publication.image} alt={`${publication.title} preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <CardHeader><CardTitle>{publication.title}</CardTitle><p className="text-muted-foreground">{publication.journal} • {publication.year}</p></CardHeader>
                  <CardContent><p className="text-muted-foreground mb-5">{publication.description}</p><div className="flex flex-wrap gap-2 mb-5">{publication.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div><div onClick={(event) => event.stopPropagation()}><Button variant="outline" size="sm" asChild><a href={publication.link} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> View Publication</a></Button></div></CardContent>
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
