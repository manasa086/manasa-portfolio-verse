import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Star } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-6">
          <p className="section-label mb-3">About Me</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Integrating real-world expertise
            <br />
            with academic insight
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm a full-stack engineer with{" "}
              <span className="font-semibold text-foreground">5+ years of professional experience</span>{" "}
              designing and delivering scalable web systems. My journey started at{" "}
              <span className="font-semibold text-foreground">Infosys</span>, building enterprise
              applications, and continued at{" "}
              <span className="font-semibold text-foreground">Glider.ai</span>, where I architected
              AI-driven pipelines, full-stack platforms, and enterprise integrations that
              processed over 1M+ events daily.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm currently pursuing my{" "}
              <span className="font-semibold text-foreground">
                Master's in Computer Science at California State University, East Bay
              </span>{" "}
              (GPA 4.0), combining industry depth with cutting-edge research in distributed
              systems and AI.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My stack spans{" "}
              <span className="font-semibold text-foreground">
                React, Node.js, Spring Boot, Python, and cloud platforms
              </span>{" "}
              (AWS, GCP, Azure). I'm passionate about systems that are both technically
              rigorous and user-centric — and I'm actively seeking internship and
              full-time opportunities to apply that in impactful products.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "4.0", label: "MS GPA" },
                { value: "1M+", label: "Daily Events Processed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-secondary border border-border"
                >
                  <div
                    className="text-2xl font-bold text-primary mb-0.5"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Education cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Current */}
            <div className="clean-card p-5 rounded-xl group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Master of Science
                    </h3>
                    <Badge className="bg-primary/10 text-primary border-0 text-xs shrink-0">
                      Current
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-primary mb-1">Computer Science · GPA 4.0</p>
                  <p className="text-xs text-muted-foreground mb-2">California State University, East Bay</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Aug 2025 – Jan 2027
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Hayward, CA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous education */}
            <div className="clean-card p-5 rounded-xl group">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-secondary rounded-lg shrink-0">
                  <GraduationCap className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm leading-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      B.Tech, Information Technology
                    </h3>
                    <Badge variant="secondary" className="text-xs shrink-0">
                      Completed
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Sree Vidyanikethan Engineering College</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> Aug 2015 – May 2019
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Tirupati, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="clean-card p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-violet-50 rounded-lg shrink-0">
                  <Star className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Focus Areas
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Distributed Systems",
                      "AI / ML",
                      "Cloud Infrastructure",
                      "Full-Stack Engineering",
                      "Data Pipelines",
                    ].map((area) => (
                      <span key={area} className="tech-badge">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
