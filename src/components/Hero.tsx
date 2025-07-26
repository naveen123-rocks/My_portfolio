import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden animate-slide-up">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-primary opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-zoom-in">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm bg-card/50 backdrop-blur-sm animate-float">
            ✨ Available for work
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Naveen Vasamsetti Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer with 1 year experience passionate about creating
            beautiful, functional web experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow/80 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border  hover:bg-card/50  backdrop-blur-sm transition-all duration-300"
              onClick={() => {
                // Create a dummy CV download
                const link = document.createElement('a');
                link.href = '/naveen Cv1.pdf';
                link.download = '/naveen Cv1.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-4 w-4 text-yellow-50" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card/50 hover:text-primary transition-all duration-300 transform hover:scale-110"
              asChild
            >
              <a href="https://github.com/naveen123-rocks" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card/50 hover:text-primary transition-all duration-300 transform hover:scale-110"
              asChild
            >
              <a href="https://www.linkedin.com/in/naveenvasamsetti/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card/50 hover:text-primary transition-all duration-300 transform hover:scale-110"
              asChild
            >
              <a href="mailto:naveenvasamsetti86@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;