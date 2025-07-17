import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Users,
  ShoppingCart,
  Building2,
  Files,
  GraduationCap,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    description:
      "Comprehensive customer relationship management system with advanced analytics and reporting.",
    longDescription:
      "Built a full-featured CRM system that helps businesses manage customer interactions, track sales pipelines, and generate detailed analytics reports. Implemented user authentication, role-based access control, and real-time notifications.",
    icon: Users,
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    features: [
      "Customer data management",
      "Sales pipeline tracking",
      "Analytics dashboard",
      "Role-based access control",
      "Real-time notifications",
      "Export functionality",
    ],
    category: "Web Application",
    githubUrl: "https://github.com/manasa086/customer-relation-management",
    liveUrl: "https://manasa-crm-application.netlify.app/",
  },
  {
    title: "Online Shopping Application",
    description:
      "E-commerce platform with modern UI, payment integration, and inventory management.",
    longDescription:
      "Developed a complete e-commerce solution featuring product catalog, shopping cart, secure payment processing, order management, and admin dashboard for inventory control.",
    icon: ShoppingCart,
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "MySQL",
      "MongoDB",
      "Stripe API",
    ],
    features: [
      "Role-based access control (Admin, Customer)",
      "Product catalog with search",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order tracking system",
      "Admin inventory management",
      "User reviews & ratings",
    ],
    category: "E-commerce",
    githubUrl: "https://github.com/manasa086/online-shopping-frontEnd",
    liveUrl: "https://manasa-online-shopping-cart.netlify.app/",
  },
  {
    title: "Invoice Management System",
    description:
      "Role-based invoice management application with PDF generation and access control.",
    longDescription:
      "Built a full-stack invoice management system using React, Node.js, and MongoDB. The platform supports role-based access where Admins manage user permissions, assign managerial roles, and grant invoice creation rights. Employees can create and view invoices from their dashboard, while Managers can oversee all employee invoices. PDF generation for each invoice is included to streamline documentation.",
    icon: Files,
    technologies: ["React", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    features: [
      "Role-based access control (Admin, Manager, Employee)",
      "Secure employee registration and login",
      "Invoice creation and management",
      "Manager view of all employee invoices",
      "PDF generation for invoices",
      "Admin permission control for employees",
    ],
    category: "Web Application",
    githubUrl: "https://github.com/manasa086/Invoice-Application",
    liveUrl: "https://react-invoice-application.netlify.app/",
  },
  {
    title: "Visitor Management System",
    description:
      "Digital solution for managing office visitors with check-in/out tracking and notifications.",
    longDescription:
      "Created a comprehensive visitor management system that digitizes the visitor check-in process, sends automatic notifications to hosts, and maintains detailed visitor logs for security purposes.",
    icon: Building2,
    technologies: ["JavaScript", "PHP", "MySQL", "jQuery", "Bootstrap"],
    features: [
      "Digital visitor check-in",
      "Host notifications",
      "Visitor badge printing",
      "Security logs",
      "Analytics & reporting",
      "Mobile responsive design",
    ],
    category: "Enterprise Solution",
  },
  {
    title: "EAMCET Options Entry Form",
    description:
      "Educational portal for entrance exam option selection with real-time data validation.",
    longDescription:
      "Developed an online portal for students to submit their college and course preferences for engineering entrance exams, featuring real-time validation, seat availability checking, and secure form submission.",
    icon: GraduationCap,
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    features: [
      "Multi-step form interface",
      "Real-time validation",
      "Seat availability checker",
      "Secure data submission",
      "Progress tracking",
      "Mobile-friendly design",
    ],
    category: "Educational Platform",
  },
];

const navigateToProjectOrGitHub = (url) => {
  window.open(url, "_blank");
};

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
            A showcase of my work spanning web applications, e-commerce
            solutions, and enterprise systems built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hover-glow group overflow-hidden"
            >
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
                      <h4 className="font-semibold mb-2 text-sm">
                        Project Overview
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {project.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
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
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          navigateToProjectOrGitHub(project.githubUrl)
                        }
                      >
                        <FaGithub className="h-5 w-5" />
                        View Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-start hover:bg-gradient-start/90"
                        onClick={() =>
                          navigateToProjectOrGitHub(project.liveUrl)
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-black"
                        ></a>
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
