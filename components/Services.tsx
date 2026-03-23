"use client";

import { useState } from "react";

const tagColors: Record<string, { bg: string; color: string; border: string }> = {
  Sales: {
    bg: "rgba(34,197,94,0.08)",
    color: "rgba(34,197,94,0.8)",
    border: "rgba(34,197,94,0.15)",
  },
  Marketing: {
    bg: "rgba(139,92,246,0.08)",
    color: "rgba(139,92,246,0.8)",
    border: "rgba(139,92,246,0.15)",
  },
  Operations: {
    bg: "rgba(59,130,246,0.08)",
    color: "rgba(59,130,246,0.8)",
    border: "rgba(59,130,246,0.15)",
  },
};

const services = [
  {
    icon: "📊",
    title: "Lead Management",
    tag: "Sales",
    description:
      "Know exactly where every lead stands. Track source, progress, and every interaction in one place. Never let a hot prospect go cold — your AI keeps the pipeline moving and surfaces the deals that need attention.",
    features: ["Lead source tracking", "Pipeline stage automation", "Follow-up reminders", "CRM sync"],
  },
  {
    icon: "🎯",
    title: "Lead Generation",
    tag: "Sales",
    description:
      "Build a steady stream of new opportunities without lifting a finger. AI-driven outreach, content-based acquisition, and smart targeting that fills your funnel with qualified prospects ready to engage.",
    features: ["Automated outreach", "Prospect qualification", "Multi-channel campaigns", "Conversion tracking"],
  },
  {
    icon: "🔍",
    title: "LLM Optimisation",
    tag: "Marketing",
    description:
      "Be the answer when customers search. Optimise your brand's presence across AI-powered search engines, ChatGPT, Perplexity, and Google AI Overviews — so your business gets found before your competitors.",
    features: ["AI search visibility", "Content optimisation", "Brand mention tracking", "Competitor gap analysis"],
  },
  {
    icon: "💬",
    title: "Customer Service Dashboard",
    tag: "Operations",
    description:
      "One unified inbox for WhatsApp and email. AI drafts replies instantly, flags urgent cases, and routes messages to the right person — so your team responds in seconds, not hours.",
    features: ["WhatsApp + Email inbox", "AI-drafted replies", "Priority flagging", "Team routing"],
  },
  {
    icon: "⚙️",
    title: "Internal Operations",
    tag: "Operations",
    description:
      "From bank reconciliation to user management — automate the repetitive work that slows your team down. Custom dashboards, approval workflows, and reporting tools built around how your business actually runs.",
    features: ["Bank reconciliation", "User management", "Custom dashboards", "Approval workflows"],
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#e8a85f" }}
          >
            What We Build
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
          >
            Five agents. Every part of your business covered.
          </h2>
          <p style={{ color: "rgba(255,247,221,0.5)", lineHeight: "1.7" }}>
            Each agent is custom-built for your workflows — not a generic chatbot. We handle sales, marketing, operations, and everything in between.
          </p>
        </div>

        {/* Grid — 2 col top row, 3 col bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {services.slice(0, 2).map((service, i) => (
            <ServiceCard key={i} service={service} index={i} hovered={hovered} setHovered={setHovered} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(2).map((service, i) => (
            <ServiceCard key={i + 2} service={service} index={i + 2} hovered={hovered} setHovered={setHovered} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  hovered,
  setHovered,
}: {
  service: (typeof services)[0];
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
}) {
  const tag = tagColors[service.tag];
  const isHovered = hovered === index;

  return (
    <div
      className="card-border rounded-2xl p-7 cursor-default transition-all duration-300 flex flex-col"
      style={{
        background: isHovered ? "rgba(232,168,95,0.04)" : "rgba(255,255,255,0.02)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
          style={{ background: "rgba(232,168,95,0.08)" }}
        >
          {service.icon}
        </div>
        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{ background: tag.bg, color: tag.color, border: `1px solid ${tag.border}` }}
        >
          {service.tag}
        </span>
      </div>

      <h3
        className="font-bold text-lg mb-3"
        style={{ color: isHovered ? "#e8a85f" : "#fff7dd" }}
      >
        {service.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "rgba(255,247,221,0.5)" }}
      >
        {service.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {service.features.map((f) => (
          <span
            key={f}
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: "rgba(232,168,95,0.06)",
              color: "rgba(232,168,95,0.7)",
              border: "1px solid rgba(232,168,95,0.12)",
            }}
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
