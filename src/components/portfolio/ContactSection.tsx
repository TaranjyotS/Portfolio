import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "taranjyotsingh357@gmail.com",
      href: "mailto:taranjyotsingh357@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(438) 855-9012",
      href: "tel:(438) 855-9012"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Mississauga, ON, Canada",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/taranjyot-singh",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/TaranjyotS",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's connect and discuss opportunities to build something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-white">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-300 hover:text-purple-400 transition-all duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Actions */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Quick Actions</h3>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full justify-start bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                    asChild
                  >
                    <a href="mailto:taranjyotsingh357@gmail.com">
                      <Mail className="mr-3" size={20} />
                      Send Email
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full justify-start border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="https://docs.google.com/document/d/1zhD8uomEnzrEsIKXi-pJmVMbgHmVoly_/export?format=pdf" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-3" size={20} />
                      Download CV
                    </a>
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        size="lg"
                        variant="outline"
                        className="justify-center border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                        asChild
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                          <span className="ml-2">{social.label}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to Action */}
          <Card className="text-center bg-gradient-to-br from-purple-600 to-blue-600 border-white/20 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start a Project?</h3>
              <p className="text-xl mb-8 text-white/90">
                I'm always interested in discussing new opportunities and innovative ideas.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg"
                asChild
              >
                <a href="mailto:taranjyotsingh357@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Let's Talk
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;