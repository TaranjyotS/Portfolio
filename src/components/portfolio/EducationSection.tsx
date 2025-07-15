import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Calendar, MapPin, Award, FileText } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Engineering (Quality System Engineering)",
      institution: "Concordia University",
      location: "Montreal, QC, Canada",
      gpa: "3.3/4.3",
      duration: "2020 - 2021",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Bachelor of Technology (Computer Science and Engineering)",
      institution: "Guru Gobind Singh Indraprastha University",
      location: "New Delhi, DL, India",
      gpa: "7.8/9",
      achievement: "First Division with Distinction",
      duration: "2015 - 2019",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const certifications = [
    {
      title: "Artificial Intelligence Certification",
      issuer: "WAC Institute (HPE certified)",
      project: "OCR Project"
    },
    {
      title: "Java/Android Development Certification",
      issuer: "CMC Institute",
      project: "Women Safety Application"
    },
    {
      title: "AWS Cloud Technical Essentials Certification",
      issuer: "Coursera"
    },
    {
      title: "Google AI Essentials Certification",
      issuer: "Coursera"
    }
  ];

  return (
    <section id="education" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 skill-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications in software engineering and emerging technologies.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="education" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto h-12 p-1">
              <TabsTrigger value="education" className="text-sm font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger value="certifications" className="text-sm font-medium">
                <FileText className="w-4 h-4 mr-2" />
                Certifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <Card 
                    key={index} 
                    className="group hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/20 text-primary">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <p className="font-semibold text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award size={16} className="text-primary" />
                          <span className="font-semibold text-card-foreground">GPA: {edu.gpa}</span>
                        </div>
                        {edu.achievement && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-400/30">
                            {edu.achievement}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="certifications" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="group hover-lift transition-all duration-300 bg-card/50 backdrop-blur-sm border border-border/50 text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary mx-auto mb-4 w-fit">
                        <FileText className="w-6 h-6" />
                      </div>
                      <h4 className="font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      {cert.project && (
                        <Badge variant="outline" className="text-xs bg-secondary text-secondary-foreground">
                          {cert.project}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;