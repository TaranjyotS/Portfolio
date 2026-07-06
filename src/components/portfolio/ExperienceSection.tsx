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
      "Evaluated production-oriented LLM and agentic AI workflows by validating multi-step reasoning, tool-usage behavior, factual grounding, safety, and response quality, improving reliability across enterprise AI use cases.",
      "Contributed to AI evaluation pipelines supporting production deployment readiness by identifying failure modes, validating retrieval-grounded responses, and providing structured feedback for RLHF and model alignment.",
      "Executed high-precision data labeling, categorization, and QA workflows using Meta’s internal platforms while meeting strict productivity and accuracy targets.",
      "Ensured data privacy, confidentiality, and security by following all Innodata CNDA requirements and Meta’s AI safety policies.",
      "Utilized Python for analyzing, validating, and processing LLM-generated outputs, including structured data handling, quality assessment, and workflow automation tasks.",
      "Assessed AI agent behaviors across multi-step workflows involving reasoning, context retrieval, tool usage, and response generation to improve production reliability and reduce failure scenarios.",
      "Contributed to AI quality monitoring by evaluating model failures, identifying recurring error patterns, and providing structured feedback to improve production reliability.",
      "Applied Python-based scripting and analytical techniques to support AI evaluation pipelines, data annotation processes, and QA validation for generative AI models.",
      "Collaborated with QA and engineering teams to validate production AI workflows, helping evaluate prompt strategies, retrieval quality, and model outputs before deployment into enterprise environments.",
      "Collaborated with team leads and QA reviewers to maintain consistent task quality, resolve ambiguities, and meet operational SLAs in a fully remote environment.",
    ],
    skills: ["Python", "NLP", "RLHF", "Prompt Engineering", "LLM Evaluation", "Data Annotation", "AI QA", "Meta AI Tooling"],
  },
  {
    title: "Software Engineer - AI Training",
    company: "Outlier AI",
    domain: "Generative AI & RLHF Platform",
    location: "Remote, Canada",
    duration: "Nov 2024 – Aug 2025",
    highlights: [
      "Contributed to LLM training through Reinforcement Learning from Human Feedback (RLHF) by evaluating model outputs, generating high-quality preference data, and improving model behavior across coding and reasoning tasks.",
      "Evaluated LLM- and agent-based workflows involving multi-step reasoning, tool selection, code generation, and contextual decision-making using structured evaluation frameworks to improve production readiness.",
      "Worked with production-oriented evaluation datasets to assess agent performance, reasoning consistency, response grounding, and instruction-following across diverse enterprise scenarios.",
      "Validated prompt orchestration strategies, reasoning chains, context management, and task execution quality across AI agent workflows, identifying edge cases and recommending improvements.",
      "Designed and solved complex programming tasks, creating robust test cases to validate AI reasoning and performance.",
      "Used Python to develop, validate, and optimize coding solutions, test cases, and algorithmic workflows for AI model evaluation and RLHF training tasks.",
      "Leveraged Python for data analysis, prompt evaluation automation, and structured validation of AI-generated outputs to improve model accuracy and consistency.",
      "Delivered detailed, actionable feedback on code and natural language outputs to improve usability, factual accuracy, and ethical compliance.",
      "Standardized prompt engineering workflows and conducted QA checks to ensure consistent, high-quality LLM behavior across multiple use cases.",
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
      "Developed microservices with Python & FastAPI deployed on AWS EC2 using Docker and Kubernetes for improved deployment consistency and operational efficiency.",
      "Contributed to a shared engineering framework supporting three enterprise products, enabling reusable services, standardized development practices, and improved engineering productivity.",
      "Led the initiative to implement CI/CD pipelines with Jenkins, automating the testing and deployment process of applications on AWS instances as a backend and framework developer in a team of 5. Also, integrated DevSecOps tools into the pipeline (e.g., Bandit).",
      "Developed data transformation modules and optimized high-volume pipelines and relational queries across large datasets using SAS, Pandas, PostgreSQL, and Pydantic.",
      "Collaborated on the containerization and deployment of 6 scalable microservices using Docker and Kubernetes, contributing to integration testing and deployment automation efforts; achieving 87% code coverage through extensive unit testing.",
      "Oversaw the official releases for 3 of the live products.",
      "Built backend automation workflows and reusable framework components that accelerated development and improved consistency across multiple enterprise products.",
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
      "Developed and maintained a Flask-based financial services platform supporting transaction processing, operational analytics, and business-critical workflows across over one million secure records.",
      "Built and optimized financial reporting and analytics pipelines supporting over one million records, improving data processing efficiency and operational reporting workflows.",
      "Integrated backend services with MongoDB, Azure Database, and AWS Lambda for serverless processing.",
      "Partnered directly with business stakeholders to gather requirements, translate financial workflows into technical solutions, and deliver scalable platform enhancements.",
      "Conducted extensive unit and integration testing using Pytest to ensure application reliability and functionality.",
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
      "Deployed a Python utility leveraging the usage of OpenCV to train a version on a dataset of 500 handwritten digits as part of a software program development group.",
      "Applied TensorFlow and PyTorch models on annotated datasets for real-time prediction use cases.",
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
