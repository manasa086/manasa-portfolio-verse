import { Target, Layers, Code2, TrendingUp } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  example: string;
  icon: React.ElementType;
  /** true = blue (primary), false = amber (warm) */
  isPrimary: boolean;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Define",
    description:
      "Start by asking the right questions — what problem needs solving, for whom, and how success is measured. Every feature begins with a clear why, not a tech stack.",
    example: "Mapped access request flows before engineering the RBAC automation system",
    icon: Target,
    isPrimary: true,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Architect the system and plan the user experience before writing code. I think in components, data flows, and user journeys simultaneously — wire before wire.",
    example: "Designed Kafka schema + assessment UI before any implementation",
    icon: Layers,
    isPrimary: false,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Write clean, maintainable code using the right tools for the problem. Performance, accessibility, and scalability are non-negotiable — not afterthoughts.",
    example: "React + Spring Boot + Cloud Run chosen for specific tradeoffs per project",
    icon: Code2,
    isPrimary: true,
  },
  {
    number: "04",
    title: "Measure",
    description:
      "Ship, observe, and iterate. Real impact is quantifiable — better UX scores, lower latency, higher automation rates. If it can't be measured, it can't be improved.",
    example: "90% ↓ manual work · 65% ↑ UX · 80% ↓ reporting effort",
    icon: TrendingUp,
    isPrimary: false,
  },
];

/** Animated arrow connector between steps */
function Connector({ vertical }: { vertical?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center shrink-0 ${
        vertical ? "py-1" : "px-1"
      }`}
    >
      {vertical ? (
        /* Down arrow on mobile */
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none"
          style={{ animation: "connector-pulse 2s ease-in-out infinite" }}>
          <line x1="10" y1="0" x2="10" y2="20"
            stroke="hsl(214 32% 80%)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <path d="M5 16 L10 24 L15 16" fill="none"
            stroke="hsl(214 32% 80%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        /* Right arrow on desktop */
        <svg width="40" height="20" viewBox="0 0 40 20" fill="none"
          style={{ animation: "connector-pulse 2s ease-in-out infinite" }}>
          <line x1="0" y1="10" x2="28" y2="10"
            stroke="hsl(214 32% 80%)" strokeWidth="1.5" strokeDasharray="4 3"/>
          <path d="M24 5 L34 10 L24 15" fill="none"
            stroke="hsl(214 32% 80%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">

        {/* Section header */}
        <div className="mb-6">
          <p className="section-label mb-3">Design Thinking</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            How I Build Products
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A consistent methodology from problem definition to measurable outcomes —
            applied to every project, from AI systems to full-stack platforms.
          </p>
        </div>

        {/* Steps — horizontal on lg, vertical on mobile */}
        <div className="flex flex-col lg:flex-row items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const accentColor = step.isPrimary
              ? "hsl(221 83% 53%)"
              : "hsl(38 92% 50%)";
            const iconBg = step.isPrimary ? "bg-accent" : "bg-warm-light";
            const iconColor = step.isPrimary ? "text-primary" : "text-warm";
            const numColor = step.isPrimary ? "text-primary/10" : "text-amber-400/15";
            const borderAccent = step.isPrimary
              ? "border-t-primary"
              : "border-t-amber-400";

            return (
              <div key={step.number} className="flex flex-col lg:flex-row items-stretch flex-1">
                {/* Step card */}
                <div
                  className={`relative flex-1 clean-card rounded-2xl p-6 overflow-hidden
                    border-t-4 ${borderAccent} group`}
                >
                  {/* Ghost number — decorative background typography */}
                  <span
                    className={`absolute -top-3 -right-1 text-[7rem] font-black leading-none
                      select-none pointer-events-none ${numColor}`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl ${iconBg} mb-4
                    group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>

                  {/* Step label */}
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: accentColor }}
                  >
                    {step.number} / {step.title}
                  </p>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-foreground mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* Real-world example chip */}
                  <div
                    className="inline-flex items-start gap-2 px-3 py-2 rounded-lg text-xs
                      font-medium leading-snug"
                    style={{
                      background: step.isPrimary
                        ? "hsl(221 83% 53% / 0.06)"
                        : "hsl(38 92% 50% / 0.08)",
                      color: accentColor,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    <span className="shrink-0 mt-0.5">✦</span>
                    {step.example}
                  </div>
                </div>

                {/* Connector (not after last item) */}
                {i < steps.length - 1 && (
                  <>
                    {/* Mobile: vertical */}
                    <div className="lg:hidden flex justify-center my-1">
                      <Connector vertical />
                    </div>
                    {/* Desktop: horizontal */}
                    <div className="hidden lg:flex items-center">
                      <Connector />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-7 p-5 rounded-2xl border border-border bg-secondary/50
          flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div
            className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br
              from-primary/20 to-amber-400/20 flex items-center justify-center"
          >
            <span
              className="text-xl font-black gradient-text"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ✦
            </span>
          </div>
          <div>
            <p
              className="font-semibold text-foreground mb-0.5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              This process isn't theoretical — it's how every project in this portfolio was built.
            </p>
            <p className="text-sm text-muted-foreground">
              Scroll down to see the outcomes: measurable impact, shipped systems, and problems genuinely solved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
