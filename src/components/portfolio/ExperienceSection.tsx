import { useState } from "react";
import { Calendar, MapPin, Briefcase, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    title: "Generative AI Associate",
    company: "Innodata",
    domain: "AI Data Engineering & Generative AI Services",
    location: "Remote, Canada",
    duration: "Aug 2025 – Present",
    highlights: [
      "Evaluated production-oriented LLM and agent workflows across multi-step reasoning, retrieval, tool usage, factual grounding, safety and response quality to improve reliability across enterprise AI use cases.",
      "Identified recurring model and agent failure modes through structured evaluation of retrieval quality, reasoning consistency, instruction following and tool-use behavior, contributing feedback for RLHF, model alignment and deployment readiness.",
      "Built Python-based analysis and validation workflows for structured LLM outputs, prompt evaluation, QA automation and AI-generated data processing.",
      "Supported AI quality monitoring and pre-deployment validation by assessing prompt strategies, retrieval-grounded responses, model outputs and production failure scenarios with QA and engineering teams.",
      "Used ChatGPT, Claude, Gemini, Codex, and Ollama for prompt experimentation, model comparison, structured-output validation, AI-assisted debugging and evaluation of reasoning and tool-use behavior.",
      "Executed high-precision data annotation and QA workflows under strict accuracy, productivity, privacy and AI-safety requirements using Meta internal platforms. ",
      "Collaborated with engineering, QA, and review teams to resolve ambiguous cases, maintain evaluation consistency and meet operational SLAs in a distributed environment.",
      ],
    skills: ["Python", "NLP", "RLHF", "Prompt Engineering", "LLM Evaluation", "Data Annotation", "AI QA", "Meta AI Tooling", "Ollama", "Claude"],
  },
  {
    title: "Software Engineer - AI Training",
    company: "Outlier AI",
    domain: "Generative AI & RLHF Platform",
    location: "Remote, Canada",
    duration: "Nov 2024 – Aug 2025",
    highlights: [
      "Contributed to LLM training through RLHF by evaluating model outputs, generating preference data, and improving model behavior across coding, reasoning, and instruction-following tasks.",
      "Evaluated agentic workflows involving multi-step reasoning, tool selection, code generation, context management, and task execution using structured evaluation frameworks.",
      "Designed complex programming problems and robust test cases to assess AI reasoning, algorithmic correctness, edge cases, and code quality.",
      "Developed Python-based workflows for prompt evaluation, structured output validation, data analysis, and automated QA of AI-generated responses.",
      "Identified grounding, consistency, usability, and safety failures and delivered actionable feedback to improve model quality and production readiness.",
      "Standardized prompt-engineering and QA practices to improve evaluation consistency across diverse AI use cases.",
    ],
    skills: ["Python", "RLHF", "Prompt Engineering", "LLM Evaluation", "NLP", "AI QA", "Model Validation"],
  },
  {
    title: "Software Development Engineer",
    company: "Anuvu",
    domain: "Aviation Connectivity & In-Flight Entertainment Platform",
    location: "Remote, Canada",
    duration: "Jun 2022 – May 2024",
    highlights: [
      "Built and deployed Python/FastAPI microservices on AWS using Docker and Kubernetes, improving deployment consistency and supporting scalable backend capabilities across enterprise products.",
      "Developed reusable services and framework components for a shared engineering platform supporting 3 enterprise products, standardizing development patterns and reducing duplicated implementation effort.",
      "Led a CI/CD initiative within a 5-engineer team, implementing Jenkins-based automated testing and deployment on AWS and integrating Bandit security scanning into the production delivery pipeline.",
      "Developed data-transformation modules and optimized high-volume processing pipelines and relational queries using SAS, Pandas, PostgreSQL, Pydantic, Databricks and SQL Server.",
      "Containerized and deployed 6 scalable microservices with Docker and Kubernetes while expanding unit and integration testing to achieve 87% code coverage.",
      "Coordinated production releases across 3 live enterprise products, supporting deployment readiness, release validation, and cross-team delivery",
      "Designed a backward-compatibility strategy for API and client framework changes using matrix-based traceability, replacing rigid one-to-one mappings and improving maintainability across evolving product versions.",
    ],
    skills: ["Python", "FastAPI", "AWS EC2", "AWS S3", "Kubernetes", "Docker", "Jenkins", "PostgreSQL", "Pandas", "Pydantic", "SAS", "CI/CD", "DevSecOps", "Databricks", "SQL Server", "Pytest", "Git", "Bitbucket"],
  },
  {
    title: "Software Development Engineer",
    company: "Solut Pvt. Ltd.",
    domain: "Financial Technology & Business Analytics Solutions",
    location: "Remote, Canada",
    duration: "Oct 2021 – May 2022",
    highlights: [
      "Built and maintained a Flask-based financial services platform supporting transaction processing, operational analytics and business-critical workflows across more than 1 million secure records.",
      "Developed and optimized financial reporting and analytics pipelines processing 1M+ records, improving efficiency across operational reporting workflows.",
      "Integrated backend services with MongoDB, Azure Database and AWS Lambda to support persistent storage and serverless processing workflows.",
      "Partnered directly with business stakeholders to gather requirements, translate financial workflows into technical solutions, and deliver scalable platform enhancements.",
      "Developed unit and integration test coverage with Pytest for financial workflows, backend APIs, and data integrations to improve regression safety and application reliability.",
    ],
    skills: ["Python", "Flask", "Pandas", "MySQL", "MongoDB", "Azure Database", "AWS Lambda", "Docker", "Kubernetes", "React", "JavaScript", "Pytest", "Git", "CI/CD"],
  },
  {
    title: "Software Development Intern",
    company: "Kyrion Technologies",
    domain: "AI & Computer Vision Solutions",
    location: "New Delhi, India",
    duration: "May 2018 – Dec 2018",
    highlights: [
      "Built an AI-based OpenCV-driven digit recognition system achieving 90% accuracy.",
      "Developed and trained an OpenCV-based handwritten-digit recognition pipeline on 500 samples, applying TensorFlow and PyTorch models for real-time prediction experiments.",
    ],
    skills: ["Python", "OpenCV", "Git", "Matplotlib", "Pytest", "PyTorch", "TensorFlow", "Postgre Database", "Docker"],
  },
  {
    title: "Software Development Intern",
    company: "Trip String",
    domain: "Travel Technology & Recommendation Platform",
    location: "New Delhi, India",
    duration: "Jun 2017 – Jan 2018",
    highlights: [
      "Designed and implemented a travel website which utilized user input to automatically rank and present alternative trip packages based on the filters supplied by the user.",
      "Managed the website's cloud deployment using Linux servers and automated updates using Bash scripting.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "WordPress", "Bash", "Linux", "Python"],
  },
];

const freelancePlatforms = [
  {
    title: "Outlier AI",
    status: "Completed project-based AI training work",
    highlights: ["RLHF and LLM evaluation", "Python coding task validation", "Prompt quality review"],
    skills: ["RLHF", "Prompt Evaluation", "Python Tasks", "Model Validation"],
  },
  {
    title: "Alignerr",
    status: "Active contributor pool",
    highlights: ["Available for selected AI evaluation projects", "LLM quality assessment", "Data annotation and review"],
    skills: ["LLM Evaluation", "Data Annotation", "AI Review"],
  },
  {
    title: "Mindrift",
    status: "Project-based contributor network",
    highlights: ["Available when matched to AI assessment work", "Prompt and response quality review", "Domain-specific model evaluation"],
    skills: ["AI Assessment", "Prompt Review", "Model Evaluation"],
  },
  {
    title: "Micro1",
    status: "Talent network / project-based availability",
    highlights: ["Available for selected AI and software projects", "Coding and evaluation workflows", "Short-term technical assignments"],
    skills: ["AI Workflows", "Coding Tasks", "Technical Review"],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleHighlights = expanded ? experience.highlights : experience.highlights.slice(0, 3);
  return (
    <div className={`relative flex items-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10" />
      <Card className="w-full md:w-[46%] bg-card/80 border-border/60 shadow-card hover-lift transition-smooth">
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2"><Calendar className="w-4 h-4" /> {experience.duration}</div>
          <CardTitle className="text-xl text-foreground">{experience.title}</CardTitle>
          <p className="text-primary font-semibold">{experience.company}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4" /> {experience.location}</div>
          <p className="text-sm text-muted-foreground pt-3">{experience.domain}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 mb-5">
            {visibleHighlights.map((item) => <li key={item} className="text-sm text-muted-foreground leading-relaxed flex gap-2"><span className="text-primary mt-1">•</span><span>{item}</span></li>)}
          </ul>
          {experience.highlights.length > 3 && <Button variant="link" className="px-0 text-primary" onClick={() => setExpanded(!expanded)}>{expanded ? "Show Less" : "Read More"}</Button>}
          <div className="flex flex-wrap gap-2 mt-4">{experience.skills.map((skill) => <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>)}</div>
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Work Experience</h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Professional journey across AI evaluation, backend engineering, cloud platforms, and data-driven systems.</p>
        </div>
        <Tabs defaultValue="professional" className="space-y-10">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 p-1">
            <TabsTrigger value="professional"><Briefcase className="w-4 h-4 mr-2" />Professional</TabsTrigger>
            <TabsTrigger value="freelancing"><Users className="w-4 h-4 mr-2" />Freelancing</TabsTrigger>
          </TabsList>
          <TabsContent value="professional">
            <div className="relative max-w-6xl mx-auto">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/40" />
              <div className="space-y-12">{visibleExperiences.map((experience, index) => <ExperienceCard key={`${experience.company}-${experience.duration}`} experience={experience} index={index} />)}</div>
            </div>
            <div className="text-center mt-10"><Button variant="outline" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Latest Only" : "View More Experience"}</Button></div>
          </TabsContent>
          <TabsContent value="freelancing">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {freelancePlatforms.map((platform) => (
                <Card key={platform.title} className="bg-card/80 border-border/60 shadow-card hover-lift transition-smooth">
                  <CardHeader><CardTitle>{platform.title}</CardTitle><p className="text-primary font-medium">{platform.status}</p></CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-5">{platform.highlights.map((item) => <li key={item} className="text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{item}</li>)}</ul>
                    <div className="flex flex-wrap gap-2">{platform.skills.map((skill) => <Badge key={skill} variant="outline">{skill}</Badge>)}</div>
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

export default ExperienceSection;
