import { Calendar, MapPin } from "lucide-react";

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
    title: "Software Engineer, Data & AI",
    company: "Glider.ai",
    location: "Bengaluru, India",
    duration: "Apr 2021 – Dec 2024",
    achievements: [
      "Engineered an internal AI-driven access automation system that analyzed Jira support tickets and dynamically enforced RBAC policies, reducing manual intervention by 90% and improving access resolution time by 70%.",
      "Architected a scalable event ingestion pipeline using Apache Kafka and Google Cloud Storage, processing over 1M+ user interaction events daily to create a replayable analytics data lake.",
      "Designed and maintained Apache Airflow batch pipelines processing 1M+ daily events, reducing manual reporting effort by 80% and enabling automated analytics dashboards.",
      "Led a full-stack redesign of the assessment creation platform using React, Node.js, Spring Boot, MySQL, and MongoDB, improving user experience by 65% and increasing productivity by 50%.",
      "Developed a scalable Dynamic Assessment Generation module that automated custom assessment creation, reducing setup time by 60% and increasing client satisfaction by 40%.",
      "Engineered enterprise integrations including ChatBot screening enhancements and ATS REST APIs (Bullhorn, Lever, LiveHire), increasing recruiter screening efficiency by 50%.",
    ],
    technologies: [
      "React", "Redux", "Node.js", "Spring Boot", "Java", "Python",
      "Apache Kafka", "Apache Airflow", "MySQL", "MongoDB", "AWS", "GCP",
    ],
  },
  {
    title: "Systems Engineer",
    company: "Infosys",
    location: "Bengaluru, India",
    duration: "Aug 2019 – Sep 2020",
    achievements: [
      "Developed and enhanced full-stack enterprise applications by debugging backend services, optimizing SQL queries, and resolving production issues across web, application, and database layers.",
      "Improved database performance by 70% through query optimization, indexing strategies, and backend logic refinement, reducing latency and improving overall system reliability.",
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL", "Oracle DB",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-secondary/40">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-6">
          <p className="section-label mb-3">Work History</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Professional Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] md:left-[15px] top-3 bottom-3 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 md:gap-10">
                {/* Timeline dot */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-sm z-10 relative">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Card content */}
                <div className="flex-1 clean-card rounded-xl p-6 md:p-8 mb-2">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3
                        className="text-xl font-bold text-foreground mb-0.5"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border mb-5" />

                  {/* Achievements */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
