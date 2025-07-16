import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Calendar, MapPin, Download } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4">
                About Me
              </Badge>
              <h2 className="md:text-3xl font-bold mb-6">
                Integrating Real-World Expertise with Academic Insight
              </h2>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated full-stack developer with over <span className="gradient-text">5+ years of professional</span> 
                experience in building scalable web applications. My journey began at 
                <span className="gradient-text">Infosys as a Systems Engineer</span>, where I honed my foundational skills, 
                and continued at <span className="gradient-text">Glider.ai as Software Engineer</span>, where I specialized in developing dynamic, 
                responsive solutions.
              </p>
              
              <p>
                Currently pursuing my <span className="gradient-text">Master's in Computer Science at California State 
                University, East Bay</span>, I'm combining my industry expertise with cutting-edge 
                academic knowledge. I'm passionate about creating efficient, user-centric 
                applications that solve real-world problems.
              </p>
              
              <p>
                My experience spans across various technologies including <span className="gradient-text">React, Meteor.js, Node.js, Java,
                PHP, and cloud platforms</span>. I'm now seeking internship opportunities where 
                I can contribute my professional background while gaining new perspectives 
                in emerging technologies.
              </p>
            </div>
          </div>

          {/* Right Content - Education Cards */}
          <div className="space-y-6">
            {/* Current Education */}
            <Card className="glass-card hover-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">Master of Science</h3>
                      <Badge className="bg-primary/20 text-primary">Current</Badge>
                    </div>
                    
                    <p className="text-primary font-medium mb-2">
                      Computer Science
                    </p>
                    
                    <p className="text-muted-foreground mb-3">
                      California State University, East Bay
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Aug 2025 – Dec 2026
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Hayward, CA
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Education */}
            <Card className="glass-card hover-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">Bachelor of Technology</h3>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                    
                    <p className="text-muted-foreground font-medium mb-2">
                      Information Technology
                    </p>
                    
                    <p className="text-muted-foreground mb-3">
                      Sree Vidyanikethan Engineering College
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Aug 2015 – May 2019
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Tirupati, India
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}