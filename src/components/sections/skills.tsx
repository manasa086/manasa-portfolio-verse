import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Database, 
  Code, 
  Cloud, 
  Layers,
  Terminal,
  Palette,
  Settings
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "jQuery", "Responsive Design"],
    color: "text-blue-500"
  },
  {
    title: "Backend Development", 
    icon: Terminal,
    skills: ["Node.js", "PHP", "RESTful APIs", "Server Architecture"],
    color: "text-green-500"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Database Design", "Query Optimization"],
    color: "text-purple-500"
  },
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "Java", "Python", "C", "TypeScript"],
    color: "text-orange-500"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Git", "GitHub", "Version Control"],
    color: "text-cyan-500"
  },
  {
    title: "Tools & Frameworks",
    icon: Settings,
    skills: ["React", "Redux", "Git", "npm", "VS Code"],
    color: "text-red-500"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning full-stack development, 
            from frontend user interfaces to backend systems and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover-glow group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Proficiency Levels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "React & JavaScript", level: 95 },
              { skill: "Node.js & Backend", level: 90 },
              { skill: "Database Management", level: 85 },
              { skill: "Cloud & DevOps", level: 65 }
            ].map((item, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h4 className="font-semibold mb-2">{item.skill}</h4>
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="hsl(var(--border))"
                          strokeWidth="2"
                        />
                        <path
                          d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          strokeDasharray={`${item.level}, 100`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{item.level}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}