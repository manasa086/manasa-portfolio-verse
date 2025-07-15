import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  ExternalLink, 
  Users, 
  ShoppingCart, 
  Building2,
  GraduationCap
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "CRM Web Application",
    description: "Comprehensive customer relationship management system with advanced analytics and reporting.",
    longDescription: "Built a full-featured CRM system that helps businesses manage customer interactions, track sales pipelines, and generate detailed analytics reports. Implemented user authentication, role-based access control, and real-time notifications.",
    icon: Users,
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
    features: [
      "Customer data management",
      "Sales pipeline tracking", 
      "Analytics dashboard",
      "Role-based access control",
      "Real-time notifications",
      "Export functionality"
    ],
    category: "Web Application",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Online Shopping Application",
    description: "E-commerce platform with modern UI, payment integration, and inventory management.",
    longDescription: "Developed a complete e-commerce solution featuring product catalog, shopping cart, secure payment processing, order management, and admin dashboard for inventory control.",
    icon: ShoppingCart,
    technologies: ["React", "Redux", "PHP", "MySQL", "Stripe API"],
    features: [
      "Product catalog with search",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order tracking system",
      "Admin inventory management",
      "User reviews & ratings"
    ],
    category: "E-commerce",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Visitor Management System",
    description: "Digital solution for managing office visitors with check-in/out tracking and notifications.",
    longDescription: "Created a comprehensive visitor management system that digitizes the visitor check-in process, sends automatic notifications to hosts, and maintains detailed visitor logs for security purposes.",
    icon: Building2,
    technologies: ["JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap"],
    features: [
      "Digital visitor check-in",
      "Host notifications",
      "Visitor badge printing",
      "Security logs",
      "Analytics & reporting",
      "Mobile responsive design"
    ],
    category: "Enterprise Solution",
    githubUrl: "#"
  },
  {
    title: "EAMCET Options Entry Form",
    description: "Educational portal for entrance exam option selection with real-time data validation.",
    longDescription: "Developed an online portal for students to submit their college and course preferences for engineering entrance exams, featuring real-time validation, seat availability checking, and secure form submission.",
    icon: GraduationCap,
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    features: [
      "Multi-step form interface",
      "Real-time validation",
      "Seat availability checker",
      "Secure data submission",
      "Progress tracking",
      "Mobile-friendly design"
    ],
    category: "Educational Platform",
    githubUrl: "#"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning web applications, e-commerce solutions, 
            and enterprise systems built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-glow group overflow-hidden">
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="ghost" size="icon" className="hover:bg-secondary">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="ghost" size="icon" className="hover:bg-secondary">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 border-t border-border">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Project Overview</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    )}
                    {!project.liveUrl && (
                      <Button variant="secondary" size="sm" className="flex-1">
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Card className="glass-card inline-block">
            <CardContent className="p-6">
              <Github className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-semibold mb-2">More Projects on GitHub</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore my complete portfolio and contribute to open source projects
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Github className="mr-2 h-4 w-4" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}