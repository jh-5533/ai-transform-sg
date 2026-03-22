"use client";

import { useState } from "react";

const services = [
  {
    icon: "💬",
    title: "Customer Support Agent",
    description:
      "Handle every inquiry instantly across WhatsApp, website chat, and email. Resolve FAQs, escalate complex cases, and never miss a message — even at 3am.",
    tags: ["WhatsApp", "Live Chat", "Email"],
    highlight: true,
  },
  {
    icon: "🎯",
    title: "Sales & Lead Qualifier",
    description:
      "Qualify inbound leads, collect requirements, and schedule demos automatically. Your sales team only speaks to prospects who are ready to buy.",
    tags: ["CRM Sync", "Follow-ups", "Scheduling"],
    highlight: false,
  },
  {
    icon: "⚙️",
    title: "Operations Automation",
    description:
      "Eliminate repetitive admin work. Automate reporting, data entry, inventory updates, and internal workflows with AI that plugs into your existing tools.",
    tags: ["Google Workspace", "Notion", "Slack"],
    highlight: false,
  },
  {
    icon: "📅",
    title: "Booking & Scheduling Agent",
    description:
      "Let customers book, reschedule, or cancel appointments via WhatsApp or your website. Automated reminders reduce no-shows by up to 40%.",
    tags: ["WhatsApp", "Calendar Sync", "Reminders"],
    highlight: false,
  },
  {
    icon: "📄",
    title: "Document Processing AI",
    description:
      "Extract, classify, and process data from invoices, forms, contracts, and receipts in seconds. Cut manual data entry and human error.",
    tags: ["OCR", "Auto-fill", "Validation"],
    highlight: false,
  },
  {
    icon: "🔊",
    title: "Voice AI Agent",
    description:
      "Handle inbound calls with natural, human-like conversation. Route calls intelligently, resolve common queries, and transcribe every interaction.",
    tags: ["Inbound Calls", "Transcription", "Routing"],
    highlight: false,
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
            AI Agents
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
          >
            An AI agent for every part of your business
          </h2>
          <p style={{ color: "rgba(255,247,221,0.5)", lineHeight: "1.7" }}>
            From the first customer message to back-office processing — our agents cover the full workflow.
            Each one is custom-built for your business, not a one-size-fits-all chatbot.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-border rounded-2xl p-7 cursor-default transition-all duration-300"
              style={{
                background:
                  hovered === i
                    ? "rgba(232,168,95,0.04)"
                    : "rgba(255,255,255,0.02)",
                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: "rgba(232,168,95,0.08)" }}
              >
                {service.icon}
              </div>

              <h3
                className="font-bold text-lg mb-3"
                style={{ color: hovered === i ? "#e8a85f" : "#fff7dd" }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(255,247,221,0.5)" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "rgba(232,168,95,0.06)",
                      color: "rgba(232,168,95,0.7)",
                      border: "1px solid rgba(232,168,95,0.12)",
                    }}
                  >
                    {tag}
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
