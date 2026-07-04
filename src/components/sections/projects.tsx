import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface PSI {
  problem: string;
  solution: string;
  impact: string;
}

interface Project {
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  headerBg: string;
  ghostColor: string;
  categoryColor: string;
  psi: PSI;
  technologies: string[];
  githubUrl?: string;
  githubUrls?: { label: string; url: string }[];
  liveUrl?: string;
  status?: "academic" | "research" | "live";
  animation: ReactNode;
}

/* ─── Animated Demo SVGs ────────────────────────────────────────
   Each animation is a self-contained SVG with inline keyframes
   prefixed per-component to avoid CSS conflicts.
──────────────────────────────────────────────────────────────── */

/** PhishLens — image scanning beam + AI API → risk score result */
function PhishLensAnimation() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes ph-scan {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(52px); }
        }
        @keyframes ph-result {
          0%,58%  { opacity: 0; transform: translateY(5px); }
          72%,90% { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; }
        }
        @keyframes ph-ring {
          0%,100% { r: 22; }
          50%     { r: 25; }
        }
        .ph-scan   { animation: ph-scan   3.2s ease-in-out infinite; }
        .ph-result { animation: ph-result 3.2s ease-in-out infinite; }
        .ph-ring   { animation: ph-ring   3.2s ease-in-out infinite; }
      `}</style>

      {/* ── Document frame ── */}
      <rect x="8" y="10" width="92" height="80" rx="5"
        fill="#7c3aed14" stroke="#7c3aed" strokeWidth="1.5"/>
      {/* content blocks */}
      <rect x="16" y="18" width="26" height="18" rx="3" fill="#7c3aed22"/>
      <rect x="48" y="18" width="44" height="18" rx="3" fill="#7c3aed16"/>
      <rect x="16" y="41" width="72" height="9" rx="2" fill="#7c3aed14"/>
      <rect x="16" y="55" width="44" height="9" rx="2" fill="#7c3aed18"/>
      <rect x="66" y="55" width="26" height="9" rx="2" fill="#7c3aed10"/>
      <rect x="16" y="69" width="60" height="9" rx="2" fill="#7c3aed12"/>

      {/* ── Scanning beam ── */}
      <g className="ph-scan">
        <rect x="8" y="8" width="92" height="11" rx="3"
          fill="#7c3aed" fillOpacity="0.18"/>
        <line x1="8" y1="19" x2="100" y2="19"
          stroke="#7c3aed" strokeWidth="2" strokeOpacity="0.7"/>
        {/* glow */}
        <line x1="8" y1="19" x2="100" y2="19"
          stroke="#7c3aed" strokeWidth="5" strokeOpacity="0.12"/>
      </g>

      {/* ── Arrow ── */}
      <line x1="103" y1="50" x2="118" y2="50"
        stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2"/>
      <path d="M118 46 L126 50 L118 54"
        fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeOpacity="0.5"/>

      {/* ── API / Model circle ── */}
      <circle className="ph-ring" cx="152" cy="50" r="22"
        fill="#7c3aed12" stroke="#7c3aed" strokeWidth="1.5"/>
      <text x="152" y="47" textAnchor="middle"
        fill="#7c3aed" fontSize="7.5" fontWeight="700" fontFamily="Inter,sans-serif">GEMINI</text>
      <text x="152" y="58" textAnchor="middle"
        fill="#7c3aed" fontSize="7.5" fontWeight="700" fontFamily="Inter,sans-serif">VISION</text>

      {/* ── Result badge ── */}
      <g className="ph-result">
        <rect x="116" y="82" width="72" height="22" rx="11"
          fill="#10b98120" stroke="#10b981" strokeWidth="1.4"/>
        <text x="152" y="96.5" textAnchor="middle"
          fill="#10b981" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">✓ SAFE · risk 8%</text>
      </g>
    </svg>
  );
}

/** Adaptive RAG — query routed through classifier to direct/single-hop/multi-hop retrieval */
function AdaptiveRAGAnimation() {
  const routes = [
    { y: 22, label: "Direct LLM", delay: "0s" },
    { y: 52, label: "Single-Hop", delay: "1.1s" },
    { y: 82, label: "Multi-Hop", delay: "2.2s" },
  ];

  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes rag-pulse {
          0%,100% { opacity: 0.3; }
          50%      { opacity: 1; }
        }
        .rag-route { animation: rag-pulse 3.3s ease-in-out infinite; }
      `}</style>

      {/* ── Query box ── */}
      <rect x="6" y="42" width="46" height="24" rx="5" fill="#059669" fillOpacity="0.12" stroke="#059669" strokeWidth="1.5"/>
      <text x="29" y="57.5" textAnchor="middle" fill="#059669" fontSize="8" fontWeight="700" fontFamily="Inter,sans-serif">Query</text>

      {/* ── Classifier diamond ── */}
      <polygon points="82,38 108,54 82,70 56,54" fill="#05966912" stroke="#059669" strokeWidth="1.5"/>
      <text x="82" y="57" textAnchor="middle" fill="#059669" fontSize="6.5" fontWeight="700" fontFamily="Inter,sans-serif">Router</text>

      {/* ── Connector: query → classifier ── */}
      <line x1="52" y1="54" x2="56" y2="54" stroke="#059669" strokeWidth="1.4" strokeOpacity="0.5"/>

      {/* ── Route boxes + connectors ── */}
      {routes.map((r) => (
        <g key={r.label} className="rag-route" style={{ animationDelay: r.delay }}>
          <line x1="108" y1="54" x2="140" y2={r.y + 9} stroke="#059669" strokeWidth="1.3" strokeDasharray="3 2"/>
          <rect x="140" y={r.y} width="54" height="18" rx="9" fill="#05966918" stroke="#059669" strokeWidth="1.3"/>
          <text x="167" y={r.y + 12.5} textAnchor="middle" fill="#059669" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">{r.label}</text>
        </g>
      ))}

      {/* ── Fallback label ── */}
      <text x="82" y="110" textAnchor="middle" fill="#059669" fontSize="7.5" fontFamily="Inter,sans-serif" fillOpacity="0.55" fontWeight="600">
        + MCP web search fallback
      </text>
    </svg>
  );
}

/** ClaimPilot — incident evidence uploaded → AI processing → insurance-ready PDF packet */
function ClaimPilotAnimation() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes cp-upload {
          0%,10%   { transform: translateX(0); opacity: 1; }
          40%,48%  { transform: translateX(48px); opacity: 1; }
          58%,100% { transform: translateX(48px); opacity: 0; }
        }
        @keyframes cp-ring {
          0%,100% { r: 20; }
          50%     { r: 23; }
        }
        @keyframes cp-pdf {
          0%,55%  { opacity: 0; transform: translateY(6px); }
          70%,92% { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; }
        }
        .cp-upload { animation: cp-upload 3.6s ease-in-out infinite; }
        .cp-ring   { animation: cp-ring   3.6s ease-in-out infinite; }
        .cp-pdf    { animation: cp-pdf    3.6s ease-in-out infinite; }
      `}</style>

      {/* ── Evidence document ── */}
      <g className="cp-upload">
        <rect x="10" y="18" width="44" height="56" rx="4" fill="#0ea5e914" stroke="#0ea5e9" strokeWidth="1.5"/>
        <rect x="18" y="26" width="28" height="6" rx="2" fill="#0ea5e930"/>
        <rect x="18" y="37" width="28" height="18" rx="3" fill="#0ea5e922"/>
        <rect x="18" y="59" width="20" height="6" rx="2" fill="#0ea5e926"/>
      </g>

      {/* ── Arrow ── */}
      <line x1="82" y1="50" x2="98" y2="50" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 2"/>
      <path d="M98 46 L106 50 L98 54" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeOpacity="0.5"/>

      {/* ── AI processing circle ── */}
      <circle className="cp-ring" cx="132" cy="50" r="20" fill="#0ea5e912" stroke="#0ea5e9" strokeWidth="1.5"/>
      <text x="132" y="47" textAnchor="middle" fill="#0ea5e9" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">CLAUDE</text>
      <text x="132" y="57" textAnchor="middle" fill="#0ea5e9" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">/OPENAI</text>

      {/* ── PDF result badge ── */}
      <g className="cp-pdf">
        <rect x="104" y="82" width="76" height="22" rx="11" fill="#10b98120" stroke="#10b981" strokeWidth="1.4"/>
        <text x="142" y="96.5" textAnchor="middle" fill="#10b981" fontSize="8.5" fontWeight="700" fontFamily="Inter,sans-serif">📄 Claim Packet Ready</text>
      </g>
    </svg>
  );
}

/** Distributed Systems — nodes with animated message packets */
function DistributedSystemsAnimation() {
  // Node positions (cx, cy)
  const center = { x: 100, y: 60 };
  const top    = { x: 100, y: 15 };
  const bl     = { x: 30,  y: 98 };
  const br     = { x: 170, y: 98 };
  const tl     = { x: 44,  y: 30 };
  const tr     = { x: 156, y: 30 };

  const edges = [
    { x1: top.x, y1: top.y, x2: center.x, y2: center.y },
    { x1: center.x, y1: center.y, x2: bl.x, y2: bl.y },
    { x1: center.x, y1: center.y, x2: br.x, y2: br.y },
    { x1: tl.x, y1: tl.y, x2: center.x, y2: center.y },
    { x1: tr.x, y1: tr.y, x2: center.x, y2: center.y },
    { x1: bl.x, y1: bl.y, x2: br.x, y2: br.y },
  ];

  // message packets: path + delay
  const packets = [
    { path: `M${top.x},${top.y} L${center.x},${center.y}`, delay: "0s" },
    { path: `M${center.x},${center.y} L${bl.x},${bl.y}`,   delay: "0.6s" },
    { path: `M${center.x},${center.y} L${br.x},${br.y}`,   delay: "1.1s" },
    { path: `M${tl.x},${tl.y} L${center.x},${center.y}`,   delay: "1.8s" },
    { path: `M${bl.x},${bl.y} L${br.x},${br.y}`,           delay: "0.3s" },
    { path: `M${tr.x},${tr.y} L${center.x},${center.y}`,   delay: "2.3s" },
  ];

  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes ds-node {
          0%,100% { opacity: 0.55; }
          50%     { opacity: 1; }
        }
        @keyframes ds-pkt {
          0%   { opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { opacity: 0; }
        }
        .ds-node { animation: ds-node 2.4s ease-in-out infinite; }
        .ds-pkt  { animation: ds-pkt  1.6s linear infinite; }
      `}</style>

      {/* ── Edges ── */}
      {edges.map((e, i) => (
        <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke="#2563eb" strokeWidth="1.2" strokeOpacity="0.25"/>
      ))}

      {/* ── Message packets (animated dots) ── */}
      {packets.map((p, i) => (
        <circle key={i} r="4.5" fill="#2563eb" fillOpacity="0.85" className="ds-pkt"
          style={{ animationDelay: p.delay }}>
          <animateMotion dur="1.6s" repeatCount="indefinite" begin={p.delay} path={p.path}/>
        </circle>
      ))}

      {/* ── Nodes ── */}
      {[center, top, bl, br].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n === center ? 11 : 8}
            fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeWidth="1.8"
            className="ds-node"
            style={{ animationDelay: `${i * 0.4}s` }}/>
          <circle cx={n.x} cy={n.y} r={n === center ? 5 : 3.5}
            fill="#2563eb" fillOpacity="0.5"/>
        </g>
      ))}
      {/* Replica nodes (dashed) */}
      {[tl, tr].map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="6.5"
          fill="#2563eb" fillOpacity="0.07"
          stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 2"/>
      ))}

      {/* ── Label ── */}
      <text x="100" y="116" textAnchor="middle"
        fill="#2563eb" fontSize="8" fontFamily="Inter,sans-serif" fillOpacity="0.55"
        fontWeight="600">
        Raft Consensus · MapReduce · Fault Tolerance
      </text>
    </svg>
  );
}

/** ML Phishing Detection — emails entering classifier → sorted results */
function MLPhishingAnimation() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes ml-e1 {
          0%,10%   { transform: translateX(0); opacity: 1; }
          40%,45%  { transform: translateX(52px); opacity: 1; }
          55%,100% { transform: translateX(52px); opacity: 0; }
        }
        @keyframes ml-e2 {
          0%,25%   { transform: translateX(0); opacity: 1; }
          55%,60%  { transform: translateX(52px); opacity: 1; }
          70%,100% { transform: translateX(52px); opacity: 0; }
        }
        @keyframes ml-safe {
          0%,44%  { opacity: 0; transform: translateY(5px); }
          58%,85% { opacity: 1; transform: translateY(0); }
          96%,100%{ opacity: 0; }
        }
        @keyframes ml-phish {
          0%,58%  { opacity: 0; transform: translateY(5px); }
          72%,90% { opacity: 1; transform: translateY(0); }
          100%    { opacity: 0; }
        }
        @keyframes ml-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ml-e1    { animation: ml-e1   4s ease-in-out infinite; }
        .ml-e2    { animation: ml-e2   4s ease-in-out infinite; }
        .ml-safe  { animation: ml-safe  4s ease-in-out infinite; }
        .ml-phish { animation: ml-phish 4s ease-in-out infinite; }
        .ml-spin  { animation: ml-spin  3s linear infinite; transform-origin: 100px 52px; }
      `}</style>

      {/* ── Classifier funnel (center) ── */}
      <polygon points="86,32 114,32 108,72 92,72"
        fill="#e11d4810" stroke="#e11d48" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Spinning gear / model indicator */}
      <circle cx="100" cy="52" r="9" fill="#e11d4812" stroke="#e11d48" strokeWidth="1.3" className="ml-spin" strokeDasharray="8 3"/>
      <circle cx="100" cy="52" r="4" fill="#e11d4830" stroke="#e11d48" strokeWidth="1"/>
      <text x="100" y="30" textAnchor="middle"
        fill="#e11d48" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">SVM / LR</text>

      {/* ── Incoming emails (left) ── */}
      {/* Email 1 */}
      <g className="ml-e1">
        <rect x="10" y="20" width="36" height="26" rx="3"
          fill="#e11d4812" stroke="#e11d48" strokeWidth="1.4"/>
        <path d="M10 20 L28 34 L46 20" fill="none" stroke="#e11d48" strokeWidth="1.3"/>
      </g>
      {/* Email 2 */}
      <g className="ml-e2">
        <rect x="10" y="58" width="36" height="26" rx="3"
          fill="#e11d4812" stroke="#e11d48" strokeWidth="1.4"/>
        <path d="M10 58 L28 72 L46 58" fill="none" stroke="#e11d48" strokeWidth="1.3"/>
      </g>

      {/* ── Results (right) ── */}
      {/* Safe */}
      <g className="ml-safe">
        <rect x="130" y="18" width="60" height="22" rx="11"
          fill="#10b98120" stroke="#10b981" strokeWidth="1.3"/>
        <text x="160" y="32.5" textAnchor="middle"
          fill="#10b981" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">✓ SAFE</text>
      </g>
      {/* Phishing */}
      <g className="ml-phish">
        <rect x="130" y="56" width="60" height="22" rx="11"
          fill="#e11d4818" stroke="#e11d48" strokeWidth="1.3"/>
        <text x="160" y="70.5" textAnchor="middle"
          fill="#e11d48" fontSize="9" fontWeight="700" fontFamily="Inter,sans-serif">⚠ PHISH</text>
      </g>

      {/* Output arrows */}
      <line x1="114" y1="44" x2="130" y2="30" stroke="#10b981" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.5"/>
      <line x1="114" y1="60" x2="130" y2="67" stroke="#e11d48" strokeWidth="1.2" strokeDasharray="3 2" strokeOpacity="0.5"/>

      {/* Label */}
      <text x="100" y="112" textAnchor="middle"
        fill="#e11d48" fontSize="8" fontFamily="Inter,sans-serif" fillOpacity="0.5" fontWeight="600">
        TF-IDF · Logistic Regression · SVM
      </text>
    </svg>
  );
}

/* ─── Project Data ────────────────────────────────────────────── */

const projects: Project[] = [
  {
    number: "01",
    title: "Adaptive RAG",
    subtitle: "Agentic AI Retrieval System",
    category: "AI · Agentic Retrieval",
    headerBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    ghostColor: "text-emerald-200",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    psi: {
      problem: "A single retrieval strategy can't serve every query — simple lookups and complex multi-fact questions need fundamentally different handling.",
      solution: "Built a multi-path RAG pipeline with a fine-tuned query classifier routing across direct LLM, single-hop, and iterative multi-hop retrieval, augmented with confidence-scored chunk relevance, agentic sub-question decomposition, and MCP-based web search fallback for out-of-corpus queries.",
      impact: "Adaptive retrieval across legal and medical document corpora that scales strategy complexity to query difficulty.",
    },
    technologies: ["LlamaIndex", "ChromaDB", "Claude API", "Python", "MCP"],
    githubUrl: "https://github.com/manasa086/adaptive-rag-router",
    status: "live",
    animation: <AdaptiveRAGAnimation />,
  },
  {
    number: "02",
    title: "ClaimPilot",
    subtitle: "AI-Powered Insurance Claim Documentation Platform",
    category: "AI · Full-Stack",
    headerBg: "bg-gradient-to-br from-sky-50 to-cyan-50",
    ghostColor: "text-sky-200",
    categoryColor: "bg-sky-100 text-sky-700 border-sky-200",
    psi: {
      problem: "Rideshare and delivery drivers struggle to document incidents thoroughly and quickly enough to file strong insurance claims.",
      solution: "Built and deployed a full-stack claims assistant using React, TypeScript, Node.js, Express, Supabase, and OpenAI/Claude APIs to help drivers document incidents, upload evidence, and track claim readiness.",
      impact: "Automated generation of insurance-ready PDF claim packets, reducing the effort needed to file a complete claim.",
    },
    technologies: ["React", "TypeScript", "Node.js", "Express", "Supabase", "OpenAI API", "Claude API"],
    githubUrl: "https://github.com/manasa086/ClaimPilot",
    liveUrl: "https://claim-pilot-frontend-gold.vercel.app/",
    status: "live",
    animation: <ClaimPilotAnimation />,
  },
  {
    number: "03",
    title: "Distributed Systems",
    subtitle: "MIT 6.824 Labs",
    category: "Academic · Systems",
    headerBg: "bg-gradient-to-br from-blue-50 to-sky-50",
    ghostColor: "text-blue-200",
    categoryColor: "bg-amber-100 text-amber-700 border-amber-200",
    psi: {
      problem: "Building fault-tolerant distributed systems requires correct consensus and replication even under network partitions and node crashes.",
      solution: "Implemented MapReduce, Raft consensus (leader election, log replication), and a fault-tolerant distributed key-value store to ensure consistency and crash recovery.",
      impact: "Linearizable reads/writes with crash recovery — verified correctness under simulated partitions and node failures.",
    },
    technologies: ["Go", "Raft Consensus", "MapReduce", "Distributed KV Store", "Fault Tolerance"],
    githubUrl: "https://github.com/manasa086/raft-mapreduce-kvstore",
    status: "academic",
    animation: <DistributedSystemsAnimation />,
  },
  {
    number: "04",
    title: "ML Phishing Detection",
    subtitle: "Against AI-Generated Attacks",
    category: "Research · Machine Learning",
    headerBg: "bg-gradient-to-br from-rose-50 to-pink-50",
    ghostColor: "text-rose-200",
    categoryColor: "bg-rose-100 text-rose-700 border-rose-200",
    psi: {
      problem: "AI-generated phishing emails increasingly bypass traditional rule-based and ML detection systems.",
      solution: "Designed and trained a two-layer ensemble phishing detection system combining TF-IDF + LinearSVM with Gradient Boosting on 13 structural features, evaluated against 200 AI-generated phishing emails.",
      impact: "Identified a recall drop from 98.96% to 89% under AI-generated attacks, then improved recall back to 98% using structural feature-based detection.",
    },
    technologies: ["Python", "TF-IDF", "LinearSVM", "Gradient Boosting", "Scikit-learn", "NLP"],
    githubUrl: "https://github.com/manasa086/ml-tfidf-gbm-phishing-detector",
    status: "research",
    animation: <MLPhishingAnimation />,
  },
  {
    number: "05",
    title: "PhishLens",
    subtitle: "Cloud-Native Image Analysis Platform",
    category: "AI · Full-Stack",
    headerBg: "bg-gradient-to-br from-violet-50 to-indigo-50",
    ghostColor: "text-violet-200",
    categoryColor: "bg-violet-100 text-violet-700 border-violet-200",
    psi: {
      problem: "Phishing images evade manual review at scale — organizations lacked automated tools for visual threat detection.",
      solution: "Architected and deployed a full-stack ERN application integrating Google Vision and Gemini APIs with OAuth ingestion, Firebase storage, and Cloud Run.",
      impact: "Automated image-level phishing detection with explainable risk scoring and monitored cloud analytics.",
    },
    technologies: ["React", "Express", "Node.js", "Google Vision API", "Gemini API", "Firebase", "Cloud Run", "OAuth"],
    githubUrl: "https://github.com/manasa086/PhishLens",
    status: "live",
    animation: <PhishLensAnimation />,
  },
];

/* ─── Status config ───────────────────────────────────────────── */
const statusConfig = {
  live: {
    label: "Live Project",
    className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    dot: true,
  },
  academic: {
    label: "Academic Project",
    className: "bg-amber-100 text-amber-700 border border-amber-200",
    dot: false,
  },
  research: {
    label: "Research · In Progress",
    className: "bg-rose-100 text-rose-700 border border-rose-200",
    dot: false,
  },
};

/* ─── Component ───────────────────────────────────────────────── */
export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-secondary/40">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-6">
          <p className="section-label mb-3">Selected Work</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Projects
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A curated set of projects spanning AI systems, distributed computing,
            full-stack engineering, and security research.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="clean-card rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* ── Animated header band ── */}
              <div className={`relative ${project.headerBg} flex items-center justify-center py-6 px-4 overflow-hidden min-h-[160px]`}>
                {/* Dot grid overlay */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, hsl(214 32% 82%) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Ghost number */}
                <span
                  className={`absolute right-4 bottom-2 text-[6rem] font-black leading-none select-none pointer-events-none ${project.ghostColor}`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: 0.55 }}
                >
                  {project.number}
                </span>
                {/* Animation */}
                <div className="relative z-10">
                  {project.animation}
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="flex flex-col flex-1 p-6 md:p-7">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${project.categoryColor}`}>
                    {project.category}
                  </span>
                  {project.status && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[project.status].className}`}>
                      {statusConfig[project.status].dot && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                      )}
                      {statusConfig[project.status].label}
                    </span>
                  )}
                </div>

                {/* Title — gradient */}
                <h3
                  className="gradient-text text-2xl font-extrabold mb-0.5 leading-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>
                )}

                {/* Problem / Solution / Impact */}
                <div className="flex flex-col gap-2 mb-4 flex-1">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-rose-500" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-rose-600 uppercase tracking-wide text-[10px] mr-1">Problem</span>
                      {project.psi.problem}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lightbulb className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-primary uppercase tracking-wide text-[10px] mr-1">Solution</span>
                      {project.psi.solution}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-3.5 w-3.5 mt-0.5 shrink-0 text-warm" style={{ color: "hsl(38 92% 50%)" }} />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-semibold uppercase tracking-wide text-[10px] mr-1" style={{ color: "hsl(38 92% 50%)" }}>Impact</span>
                      {project.psi.impact}
                    </p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant="outline" size="sm"
                      className="rounded-full text-xs gap-1.5 border-border hover:bg-secondary hover:border-primary/30 transition-all"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      View on GitHub
                    </Button>
                  )}
                  {project.githubUrls?.map((gh) => (
                    <Button
                      key={gh.label} variant="outline" size="sm"
                      className="rounded-full text-xs gap-1.5 border-border hover:bg-secondary hover:border-primary/30 transition-all"
                      onClick={() => window.open(gh.url, "_blank")}
                    >
                      <FaGithub className="h-3.5 w-3.5" />
                      {gh.label}
                    </Button>
                  ))}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="rounded-full text-xs gap-1.5 bg-primary hover:bg-primary/90 text-white transition-all"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Demo
                    </Button>
                  )}
                  {project.status === "academic" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground bg-secondary rounded-full border border-border">
                      MIT 6.824 Lab Implementation
                    </span>
                  )}
                  {project.status === "research" && !project.githubUrl && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground bg-secondary rounded-full border border-border">
                      Research in progress — GitHub coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
