import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

/** Key achievement chips shown below the description to surface impact metrics visually */
const proofPoints = [
  {
    value: "1M+",
    label: "events / day",
    dot: "bg-primary",
    chipClass: "chip-float-1",
    textColor: "text-primary",
    bg: "bg-accent",
    border: "border-primary/20",
  },
  {
    value: "65%",
    label: "UX improvement",
    dot: "bg-amber-400",
    chipClass: "chip-float-2",
    textColor: "text-warm",
    bg: "bg-warm-light",
    border: "border-warm",
  },
  {
    value: "90%",
    label: "automation rate",
    dot: "bg-amber-400",
    chipClass: "chip-float-3",
    textColor: "text-warm",
    bg: "bg-warm-light",
    border: "border-warm",
  },
  {
    value: "4.0",
    label: "GPA · MS CS",
    dot: "bg-emerald-400",
    chipClass: "chip-float-4",
    textColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-24 pb-10 flex items-center relative overflow-hidden dot-grid px-6"
    >
      {/* ── Gradient fade over dot grid ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />

      {/* ── Animated background blobs (visual design depth) ── */}
      <div
        className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(221 83% 53% / 0.07), transparent 70%)",
          animation: "blob-drift-a 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(38 92% 50% / 0.07), transparent 70%)",
          animation: "blob-drift-b 18s ease-in-out infinite",
        }}
      />

      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-border shadow-sm mb-5 text-sm font-medium text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Internships &amp; Full-time Roles
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.03em" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Manasa Somisetty</span>
          </h1>

          {/* Role */}
          <p
            className="text-xl md:text-2xl font-semibold text-foreground/80 mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Full-Stack Engineer &amp; Data/AI Specialist
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-6">
            Former Software Engineer with{" "}
            <span className="font-medium text-foreground">5+ years</span> building scalable systems at{" "}
            <span className="font-medium text-foreground">Glider.ai</span> &amp;{" "}
            <span className="font-medium text-foreground">Infosys</span>. Pursuing{" "}
            <span className="font-medium text-foreground">MS in CS</span> at Cal State East Bay.
            Passionate about AI, distributed systems, and engineering products people love to use.
          </p>

          {/* ── Proof-point chips ── */}
          <div className="flex flex-wrap justify-center gap-3 mb-7">
            {proofPoints.map((pt) => (
              <div
                key={pt.label}
                className={`${pt.chipClass} inline-flex items-center gap-2.5 pl-2.5 pr-4 py-1.5 rounded-full border ${pt.border} ${pt.bg} shadow-sm`}
              >
                <span className={`w-2 h-2 rounded-full shrink-0 ${pt.dot}`} />
                <span
                  className={`text-lg font-extrabold leading-none ${pt.textColor}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {pt.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{pt.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-md hover:shadow-lg transition-all"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/manasa086"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-white hover:bg-secondary hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground shadow-sm"
              aria-label="GitHub"
            >
              <FaGithub style={{ width: "18px", height: "18px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/manasa-somisetty"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-border bg-white hover:bg-secondary hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedin style={{ width: "18px", height: "18px" }} />
            </a>
            <a
              href="mailto:manasa.somisetty06@gmail.com"
              className="p-2.5 rounded-full border border-border bg-white hover:bg-secondary hover:border-primary/30 transition-all text-muted-foreground hover:text-foreground shadow-sm"
              aria-label="Email"
            >
              <Mail style={{ width: "18px", height: "18px" }} />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
