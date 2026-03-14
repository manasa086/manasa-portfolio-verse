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

/** Clarify — text highlight sliding in → semantic tooltip appears */
function ClarifyAnimation() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes cl-hi {
          0%,18%  { width: 0; }
          38%,72% { width: 88px; }
          90%,100%{ width: 0; }
        }
        @keyframes cl-tip {
          0%,40%  { opacity: 0; transform: translateY(7px); }
          58%,83% { opacity: 1; transform: translateY(0); }
          96%,100%{ opacity: 0; }
        }
        @keyframes cl-cur {
          0%,49%  { opacity: 1; }
          50%,100%{ opacity: 0; }
        }
        .cl-hi  { animation: cl-hi  4s ease-in-out infinite; }
        .cl-tip { animation: cl-tip 4s ease-in-out infinite; }
        .cl-cur { animation: cl-cur 0.9s step-end infinite; }
      `}</style>

      {/* ── Browser window ── */}
      <rect x="5" y="5" width="190" height="110" rx="7"
        fill="#f0fdf4" stroke="#059669" strokeWidth="1.5"/>
      {/* Chrome bar */}
      <rect x="5" y="5" width="190" height="20" rx="7"
        fill="#059669" fillOpacity="0.1"/>
      <circle cx="18" cy="15" r="4" fill="#059669" fillOpacity="0.3"/>
      <circle cx="30" cy="15" r="4" fill="#059669" fillOpacity="0.3"/>
      <circle cx="42" cy="15" r="4" fill="#059669" fillOpacity="0.3"/>
      {/* URL bar */}
      <rect x="55" y="9" width="110" height="12" rx="6"
        fill="#059669" fillOpacity="0.08"/>
      <text x="110" y="18.5" textAnchor="middle"
        fill="#059669" fontSize="6.5" fontFamily="Inter,sans-serif" fillOpacity="0.6">
        clarify-extension · active
      </text>

      {/* ── Document text lines ── */}
      <rect x="14" y="32" width="168" height="8" rx="2" fill="#059669" fillOpacity="0.1"/>

      {/* Line 2 with animated highlight */}
      <rect x="14" y="45" width="168" height="8" rx="2" fill="#059669" fillOpacity="0.07"/>
      <rect x="14" y="45" height="8" rx="2" fill="#059669" fillOpacity="0.35" className="cl-hi">
        <animate attributeName="width" values="0;88;88;0"
          keyTimes="0;0.35;0.72;1" dur="4s" repeatCount="indefinite"/>
      </rect>

      <rect x="14" y="58" width="130" height="8" rx="2" fill="#059669" fillOpacity="0.09"/>
      <rect x="14" y="71" width="155" height="8" rx="2" fill="#059669" fillOpacity="0.1"/>
      {/* blinking cursor */}
      <line className="cl-cur" x1="170" y1="71" x2="170" y2="79"
        stroke="#059669" strokeWidth="1.5"/>

      {/* ── Semantic tooltip ── */}
      <g className="cl-tip">
        <rect x="10" y="87" width="176" height="26" rx="6"
          fill="white" stroke="#059669" strokeWidth="1.3"
          style={{filter:"drop-shadow(0 2px 8px rgba(5,150,105,0.18))"}}/>
        <text x="98" y="99" textAnchor="middle"
          fill="#059669" fontSize="8" fontWeight="600" fontFamily="Inter,sans-serif">
          ✦ Semantic context identified
        </text>
        <text x="98" y="109" textAnchor="middle"
          fill="#059669" fontSize="7" fontFamily="Inter,sans-serif" fillOpacity="0.7">
          Generating real-time interpretation...
        </text>
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

/** Online Shopping — product + add-to-cart fly-in animation */
function ShoppingAnimation() {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
      <style>{`
        @keyframes sh-item {
          0%,15%  { transform: translate(0,0) scale(1); opacity: 1; }
          45%     { transform: translate(66px,-22px) scale(0.5); opacity: 0.8; }
          55%,100%{ transform: translate(66px,-22px) scale(0.3); opacity: 0; }
        }
        @keyframes sh-badge {
          0%,48%  { opacity: 0; transform: scale(0.4); }
          62%,88% { opacity: 1; transform: scale(1); }
          98%,100%{ opacity: 0; }
        }
        @keyframes sh-cart {
          0%,55%,100%{ transform: scale(1); }
          62%  { transform: scale(1.18); }
          70%  { transform: scale(0.92); }
          78%  { transform: scale(1.06); }
        }
        @keyframes sh-btn {
          0%,20%  { fill: #0ea5e9; }
          30%,60% { fill: #0284c7; }
          70%,100%{ fill: #0ea5e9; }
        }
        .sh-item  { animation: sh-item  3.5s ease-in-out infinite; }
        .sh-badge { animation: sh-badge 3.5s ease-in-out infinite; }
        .sh-cart  { animation: sh-cart  3.5s ease-in-out infinite; }
        .sh-btn   { animation: sh-btn   3.5s ease-in-out infinite; }
      `}</style>

      {/* ── Product card ── */}
      <rect x="8" y="10" width="80" height="95" rx="7"
        fill="white" stroke="#0ea5e9" strokeWidth="1.5"/>
      {/* product image area */}
      <rect x="16" y="18" width="64" height="44" rx="4" fill="#0ea5e925"/>
      {/* box icon */}
      <path d="M32 32 L48 26 L64 32 L64 46 L48 52 L32 46 Z"
        fill="#0ea5e930" stroke="#0ea5e9" strokeWidth="1.4" strokeLinejoin="round"/>
      <line x1="48" y1="26" x2="48" y2="52" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.5"/>
      <line x1="32" y1="32" x2="64" y2="32" stroke="#0ea5e9" strokeWidth="1" strokeOpacity="0.5"/>
      {/* product info */}
      <rect x="16" y="68" width="44" height="7" rx="3" fill="#0ea5e925"/>
      <rect x="16" y="79" width="30" height="7" rx="3" fill="#0ea5e940"/>
      {/* price */}
      <text x="64" y="87" textAnchor="end"
        fill="#0ea5e9" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">$49</text>

      {/* Add to Cart button */}
      <rect x="14" y="90" width="68" height="10" rx="5" className="sh-btn" fill="#0ea5e9"/>
      <text x="48" y="98.5" textAnchor="middle"
        fill="white" fontSize="7" fontWeight="700" fontFamily="Inter,sans-serif">Add to Cart</text>

      {/* ── Flying product item ── */}
      <g className="sh-item">
        <rect x="36" y="60" width="24" height="18" rx="3" fill="#0ea5e940" stroke="#0ea5e9" strokeWidth="1.2"/>
        <path d="M42 66 L48 63 L54 66 L54 73 L48 76 L42 73 Z"
          fill="#0ea5e960" stroke="#0ea5e9" strokeWidth="1"/>
      </g>

      {/* ── Cart (right side) ── */}
      <g className="sh-cart">
        {/* cart body */}
        <path d="M108 40 L116 40 L122 68 L154 68 L160 46 L116 46"
          fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* wheels */}
        <circle cx="128" cy="76" r="5.5" fill="#0ea5e925" stroke="#0ea5e9" strokeWidth="1.8"/>
        <circle cx="148" cy="76" r="5.5" fill="#0ea5e925" stroke="#0ea5e9" strokeWidth="1.8"/>
        {/* handle */}
        <path d="M108 40 L104 30" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round"/>
      </g>

      {/* ── Cart badge counter ── */}
      <g className="sh-badge">
        <circle cx="162" cy="36" r="10" fill="#0ea5e9"/>
        <text x="162" y="40" textAnchor="middle"
          fill="white" fontSize="10" fontWeight="700" fontFamily="Inter,sans-serif">3</text>
      </g>

      {/* Label */}
      <text x="134" y="97" textAnchor="middle"
        fill="#0ea5e9" fontSize="8" fontFamily="Inter,sans-serif" fillOpacity="0.55" fontWeight="600">
        React · Redux · Stripe
      </text>
    </svg>
  );
}

/* ─── Project Data ────────────────────────────────────────────── */

const projects: Project[] = [
  {
    number: "01",
    title: "PhishLens",
    subtitle: "Cloud-Native Image Analysis Platform",
    category: "AI · Full-Stack",
    headerBg: "bg-gradient-to-br from-violet-50 to-indigo-50",
    ghostColor: "text-violet-200",
    categoryColor: "bg-violet-100 text-violet-700 border-violet-200",
    psi: {
      problem: "Phishing images evade manual review at scale — organizations lacked automated tools for visual threat detection.",
      solution: "Full-stack cloud app using Google Vision + Gemini APIs to scan images and generate explainable risk scores, deployed on Cloud Run with Firebase storage.",
      impact: "Automated image-level phishing detection with real-time risk scoring and a cloud-monitored analytics pipeline.",
    },
    technologies: ["React", "Node.js", "Google Vision API", "Gemini API", "Firebase", "Cloud Run", "OAuth"],
    githubUrl: "https://github.com/manasa086/PhishLens",
    status: "live",
    animation: <PhishLensAnimation />,
  },
  {
    number: "02",
    title: "Clarify",
    subtitle: "LLM-Powered Semantic Assistant",
    category: "Browser Extension · AI",
    headerBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    ghostColor: "text-emerald-200",
    categoryColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    psi: {
      problem: "Dense web content requires context-switching to external tools for comprehension, breaking reading flow.",
      solution: "Chrome extension that captures highlighted text + full DOM context and sends structured prompts to an LLM for in-page semantic interpretation.",
      impact: "Zero-friction, context-aware understanding — real-time interpretations without ever leaving the browser tab.",
    },
    technologies: ["JavaScript", "Chrome Extensions API", "DOM Manipulation", "LLM API", "HTML", "CSS"],
    githubUrl: "https://github.com/manasa086/clarify",
    status: "live",
    animation: <ClarifyAnimation />,
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
      solution: "Implemented MapReduce, Raft consensus (leader election, log replication, membership changes), and a fault-tolerant KV store from scratch in Go.",
      impact: "Linearizable reads/writes with crash recovery — verified correctness under simulated partitions and node failures.",
    },
    technologies: ["Go", "Raft Consensus", "MapReduce", "Distributed KV Store", "Fault Tolerance"],
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
      solution: "Trained TF-IDF + Logistic Regression/SVM classifiers, then systematically evaluated robustness against AI-generated phishing content.",
      impact: "Identified critical robustness gaps; proposed transformer-based improvements to address AI-generated attack vectors.",
    },
    technologies: ["Python", "TF-IDF", "Logistic Regression", "SVM", "Scikit-learn", "NLP"],
    status: "research",
    animation: <MLPhishingAnimation />,
  },
  {
    number: "05",
    title: "Online Shopping App",
    subtitle: "Full-Stack E-commerce Platform",
    category: "Full-Stack · E-commerce",
    headerBg: "bg-gradient-to-br from-sky-50 to-cyan-50",
    ghostColor: "text-sky-200",
    categoryColor: "bg-sky-100 text-sky-700 border-sky-200",
    psi: {
      problem: "Building a full e-commerce experience requires coordinating complex frontend state, secure payments, and a scalable backend across multiple services.",
      solution: "Decoupled React/Redux frontend from a Node.js/MySQL backend, integrated Stripe for payments, and built a role-based admin dashboard.",
      impact: "Delivered a live, production-grade shopping platform with cart, orders, reviews, and payment processing — deployed on Netlify.",
    },
    technologies: ["React", "Redux", "Node.js", "MySQL", "MongoDB", "Stripe API"],
    githubUrls: [
      { label: "Frontend", url: "https://github.com/manasa086/online-shopping-frontEnd" },
      { label: "Backend", url: "https://github.com/manasa086/online-shopping-backend" },
    ],
    liveUrl: "https://manasa-online-shopping-cart.netlify.app/",
    status: "live",
    animation: <ShoppingAnimation />,
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
                  {project.status === "research" && (
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
