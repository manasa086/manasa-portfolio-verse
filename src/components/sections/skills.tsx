import { Code2, Database, Cloud, Server, Layers, Cpu } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Web",
    icon: Code2,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    skills: [
      "Java", "Python", "JavaScript", "TypeScript",
      "React", "Redux", "Node.js", "Spring Boot", "HTML5", "CSS",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB",
      "Git", "GitHub", "Postman", "Linux / Unix",
    ],
  },
  {
    title: "Data & Distributed Systems",
    icon: Server,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    skills: [
      "Hadoop", "HDFS", "Hive", "HBase",
      "Apache Spark", "SparkSQL", "PySpark",
      "Apache Kafka", "Sqoop",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    skills: [
      "AWS (EC2, S3, Lambda, IAM, VPC)",
      "GCP (Cloud Run, BigQuery, Dataflow, Composer)",
      "Azure (Databricks, Data Lake, Data Factory)",
      "Docker", "Kubernetes", "Jenkins",
    ],
  },
  {
    title: "AI & Coding Tools",
    icon: Cpu,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    skills: ["Cursor AI", "CodeX", "Claude"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    skills: [
      "RESTful APIs", "Microservices", "Event-Driven Architecture",
      "RBAC", "CI/CD", "Agile / Scrum",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-6">
          <p className="section-label mb-3">Technical Skills</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A comprehensive stack from frontend interfaces to distributed data
            infrastructure and cloud deployment.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="clean-card rounded-xl p-6 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-lg ${cat.iconBg} group-hover:scale-110 transition-transform`}>
                  <cat.icon className={`h-5 w-5 ${cat.iconColor}`} />
                </div>
                <h3
                  className="font-semibold text-foreground text-sm"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
