import { Code, User, Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const fullText = "Software Development Engineer";
  
  const professionalIntros = [
    "Crafting Digital Excellence",
    "Engineering Innovative Solutions", 
    "Building Tomorrow's Technology",
    "Transforming Ideas Into Reality"
  ];
  
  const [currentIntro, setCurrentIntro] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Pause and restart
        setTimeout(() => {
          currentIndex = 0;
          setTypedText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);
  
  useEffect(() => {
    const introInterval = setInterval(() => {
      setCurrentIntro((prev) => (prev + 1) % professionalIntros.length);
    }, 3000);

    return () => clearInterval(introInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-16">
      {/* Floating bubbles background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bubble opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: `linear-gradient(135deg, 
                hsl(${210 + Math.random() * 60}, 100%, ${45 + Math.random() * 20}%), 
                hsl(${220 + Math.random() * 60}, 100%, ${55 + Math.random() * 20}%))`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Collapsible side panel with toggle button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        {/* Toggle button - simplified arrow */}
        <div 
          className={`cursor-pointer group transition-all duration-300 ${
            isCollapsed ? 'absolute right-4 top-1/2 -translate-y-1/2' : 'absolute -left-8 top-1/2 -translate-y-1/2'
          }`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronLeft className="w-6 h-6 text-primary group-hover:text-primary/80 transition-all duration-300 hover:scale-110" />
          ) : (
            <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary/80 transition-all duration-300 hover:scale-110" />
          )}
        </div>

        {/* Icon quartet - completely hidden when collapsed */}
        {!isCollapsed && (
          <div className="flex flex-col gap-4 animate-fade-in pr-8">
            <div className="group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-500 hover:scale-110 hover:rotate-12">
                <User className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors duration-300" />
              </div>
            </div>
            <div className="group cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-500 hover:scale-110 hover:-rotate-12">
                <Code className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors duration-300" />
              </div>
            </div>
            <div className="group cursor-pointer" onClick={() => window.open('https://github.com/TaranjyotS', '_blank')}>
              <div className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-500 hover:scale-110 hover:rotate-12">
                <Github className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors duration-300" />
              </div>
            </div>
            <div className="group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/taranjyot-singh/', '_blank')}>
              <div className="p-3 rounded-full glassmorphism hover:bg-primary/20 transition-all duration-500 hover:scale-110 hover:-rotate-12">
                <Linkedin className="w-5 h-5 text-primary group-hover:text-primary/80 transition-colors duration-300" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center max-w-4xl mx-auto space-y-12">
        {/* Interactive professional intro that changes */}
        <div className="space-y-6">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl md:text-8xl font-bold text-white dark:text-white text-gray-800 leading-tight tracking-tight transition-all duration-1000">
              <span 
                key={currentIntro}
                className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-600 from-blue-500 via-sky-500 to-blue-700 bg-clip-text text-transparent animate-pulse"
              >
                {professionalIntros[currentIntro]}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-purple-200/80 dark:text-purple-200/80 text-blue-600/80 font-light mt-4">
              Through Innovation & Excellence
            </p>
          </div>
          
          {/* Typing animation */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl text-purple-300 dark:text-purple-300 text-blue-700 font-light tracking-wide h-12 flex items-center justify-center">
              <span className="inline-flex items-center gap-3">
                <Code className="w-7 h-7 text-purple-400 dark:text-purple-400 text-blue-600 animate-pulse" />
                {typedText}
                <span className="animate-pulse text-purple-400 dark:text-purple-400 text-blue-600">|</span>
              </span>
            </p>
          </div>
        </div>
        
        
        {/* Scroll indicator with theme awareness */}
        <div className="animate-fade-in pt-12" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-center gap-2 text-purple-300/60 dark:text-purple-300/60 text-blue-500/60">
            <span className="text-sm font-light tracking-widest">SCROLL DOWN</span>
            <div className="w-6 h-10 border-2 border-purple-400/30 dark:border-purple-400/30 border-blue-500/40 rounded-full p-1 animate-bounce">
              <div className="w-1 h-3 bg-purple-400/50 dark:bg-purple-400/50 bg-blue-500/60 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;