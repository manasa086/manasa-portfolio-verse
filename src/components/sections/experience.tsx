import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  current?: boolean;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Glider.ai",
    location: "Bengaluru, India",
    duration: "Apr 2021 – Dec 2024",
    achievements: [
      `Revamped the assessment workflow, enhancing user experience by 65% and increasing productivity by 50%.`,
      `Designed a scalable dynamic assessment module, enabling on-demand creation based on client criteria, reducing setup time by 60% and boosting client satisfaction by 40%.`,
      `Integrated a Nurse Skill Checklist into Glider.ai's ChatBot, enhancing recruiter experience and boosting screening efficiency by 50% through full-stack development.`,
      `Developed RESTful APIs to integrate Bullhorn, Lever, and LiveHire into the Glider.ai platform, enabling
      seamless access to core functionalities`,
      `Built a full-stack L&D application for enterprise clients like Intuit, improving employee efficiency and streamlining training workflows by 50% through cross-functional collaboration.`,
      `Implemented robust role-based access control (RBAC) across the Learning and Development application,
      enhancing security and reducing unauthorized access vulnerabilities`,
    ],
    technologies: [
      "React",
      "Redux",
      "Meteor.js",
      "Node.js",
      "HTML5",
      "CSS",
      "Java",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "AWS",
      "Git",
    ],
  },
  {
    title: "Systems Engineer",
    company: "Infosys",
    location: "Bengaluru, India",
    duration: "Aug 2019 – Sep 2020",
    achievements: [
      "Troubleshooted exact issues by analyzing all the DB logs, server logs, and network logs",
      "Fine tuned the DB queries which enhanced 70% database performance.",
    ],
    technologies: [
      "Oracle DB",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "MySQL",
    ],
  },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 5 years of hands-on experience in full-stack development, 
            working with cutting-edge technologies and delivering impactful solutions.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover-glow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline connector for visual appeal */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent top-0 -z-10" />
        </div>
      </div>
    </section>
  );
}