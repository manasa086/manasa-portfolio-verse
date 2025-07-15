import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Server, 
  Layers3, 
  Smartphone,
  Database,
  Cloud,
  ArrowRight
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  technologies: string[];
}

const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web application development with modern technologies and best practices.",
    icon: Layers3,
    features: [
      "Responsive web applications",
      "Modern UI/UX design implementation", 
      "Database integration",
      "Performance optimization",
      "Cross-browser compatibility"
    ],
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Frontend Development",
    description: "Creating engaging, responsive user interfaces with modern frontend technologies.",
    icon: Code2,
    features: [
      "Interactive user interfaces",
      "Mobile-first responsive design",
      "State management",
      "Component architecture",
      "Accessibility compliance"
    ],
    technologies: ["React", "Redux", "JavaScript", "CSS3", "HTML5"]
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with scalable architecture and efficient data management.",
    icon: Server,
    features: [
      "RESTful API development",
      "Database design & optimization",
      "Authentication systems",
      "Server architecture",
      "Third-party integrations"
    ],
    technologies: ["Node.js", "PHP", "Express.js", "MySQL", "MongoDB"]
  },
  {
    title: "API Integration & Development",
    description: "Seamless integration of third-party services and development of custom APIs.",
    icon: Database,
    features: [
      "REST API development",
      "Third-party API integration",
      "Data synchronization",
      "API documentation",
      "Error handling & validation"
    ],
    technologies: ["Node.js", "Express", "Postman", "JWT", "OAuth"]
  },
  {
    title: "Database Solutions",
    description: "Comprehensive database design, optimization, and management services.",
    icon: Database,
    features: [
      "Database schema design",
      "Query optimization",
      "Data migration",
      "Performance tuning",
      "Backup & recovery"
    ],
    technologies: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
  },
  {
    title: "Cloud Deployment",
    description: "Scalable cloud deployment and DevOps solutions for modern applications.",
    icon: Cloud,
    features: [
      "AWS deployment",
      "CI/CD pipeline setup",
      "Performance monitoring",
      "Auto-scaling configuration",
      "Security implementation"
    ],
    technologies: ["AWS", "Git", "GitHub Actions", "Docker"]
  }
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            What I Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to life 
            with modern technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-glow group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="glass-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. I'm currently available 
              for internships and freelance projects.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-start hover:bg-gradient-start/90 text-primary-foreground hover-glow"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}