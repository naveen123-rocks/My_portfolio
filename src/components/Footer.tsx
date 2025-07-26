import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and description */}
          <div className="text-center md:text-left">
            <div 
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              Portfolio
            </div>
            <p className="text-muted-foreground mt-2 text-sm">
              Building digital experiences that matter
            </p>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card/50 hover:text-primary transition-all duration-300 transform hover:scale-110"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card/50 hover:text-primary transition-all duration-300 transform hover:scale-110"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-card/50 hover:text-primary transition-all duration-300 transform hover:scale-110"
              asChild
            >
              <a href="mailto:naveenvasamsetti86@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with 
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              by naveen vasamsetti developer
            </p>
          </div>
        </div>

        {/* Back to top button */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="hover:bg-card/50 hover:text-primary transition-all duration-300"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;