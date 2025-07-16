import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Available for Internships
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">
                  Manasa Somisetty
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Full-Stack Developer | MS in CS | Passionate About Building Scalable Web Applications
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Former Software Engineer with 5+ years of professional experience developing 
                dynamic, responsive web applications. Currently pursuing MS in Computer Science 
                at California State University, East Bay.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="bg-gradient-start hover:bg-gradient-start/90 text-primary-foreground hover-glow"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}