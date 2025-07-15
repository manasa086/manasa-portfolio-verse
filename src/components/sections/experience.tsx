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
      "Developed and maintained dynamic, responsive web applications using React, Redux, and Node.js",
      "Implemented efficient database solutions with MySQL, MongoDB, and PostgreSQL",
      "Collaborated with cross-functional teams to deliver high-quality software solutions",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews to maintain code quality",
      "Integrated third-party APIs and services to enhance application functionality"
    ],
    technologies: ["React", "Redux", "Node.js", "JavaScript", "MySQL", "MongoDB", "AWS"]
  },
  {
    title: "Systems Engineer",
    company: "Infosys",
    location: "Bengaluru, India", 
    duration: "Aug 2019 – Sep 2020",
    achievements: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript, and jQuery",
      "Developed backend services using PHP and integrated with various databases",
      "Participated in full software development lifecycle from requirement analysis to deployment",
      "Collaborated with international clients to understand and implement business requirements",
      "Maintained and enhanced existing applications to improve user experience",
      "Gained expertise in version control using Git and GitHub"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "MySQL", "Git"]
  }
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