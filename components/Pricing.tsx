"use client";

import { useState } from "react";

const plans = [
  {
    name: "Growth",
    price: { monthly: 500, annual: 400 },
    description: "One powerful AI agent to start automating your most important workflow.",
    features: [
      "1 AI Agent (your choice)",
      "WhatsApp + Website integration",
      "Lead Management or Customer Service",
      "Up to 3,000 conversations/mo",
      "CRM & calendar integrations",
      "Priority support",
      "Monthly performance report",
    ],
    cta: "Get Started",
    highlight: false,
    badge: null,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "Full-stack AI transformation across sales, marketing, and operations.",
    features: [
      "Unlimited AI Agents",
      "All 5 agent types included",
      "All channels + custom integrations",
      "Unlimited conversations",
      "Custom training & fine-tuning",
      "Dedicated account manager",
      "99.9% SLA-backed uptime",
      "Quarterly business reviews",
    ],
    cta: "Talk to Us",
    highlight: true,
    badge: "Most Popular",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#e8a85f" }}
          >
            Pricing
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
          >
            Simple, transparent pricing
          </h2>
          <p style={{ color: "rgba(255,247,221,0.5)" }}>
            No hidden setup fees. No per-seat licensing. Pay for outcomes, not headcount.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3">
            <span
              className="text-sm font-medium select-none"
              style={{ color: !annual ? "#fff7dd" : "rgba(255,247,221,0.4)" }}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual((v) => !v)}
              aria-label="Toggle annual pricing"
              className="relative flex-shrink-0 rounded-full transition-colors duration-300"
              style={{
                width: "48px",
                height: "28px",
                background: annual ? "#e8a85f" : "rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="absolute rounded-full bg-white transition-all duration-300"
                style={{
                  width: "20px",
                  height: "20px",
                  top: "4px",
                  left: annual ? "24px" : "4px",
                }}
              />
            </button>
            <span
              className="text-sm font-medium select-none"
              style={{ color: annual ? "#fff7dd" : "rgba(255,247,221,0.4)" }}
            >
              Annual
              <span
                className="ml-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: "rgba(232,168,95,0.15)", color: "#e8a85f" }}
              >
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Plans — centered 2 column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col transition-all duration-200 relative"
              style={{
                background: plan.highlight ? "rgba(232,168,95,0.06)" : "rgba(255,255,255,0.02)",
                border: plan.highlight
                  ? "1px solid rgba(232,168,95,0.3)"
                  : "1px solid rgba(232,168,95,0.08)",
              }}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "#e8a85f", color: "#080808" }}
                >
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className="font-bold text-xl mb-2"
                  style={{ color: plan.highlight ? "#e8a85f" : "#fff7dd" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,247,221,0.45)" }}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                {plan.price.monthly ? (
                  <div className="flex items-end gap-1">
                    <span
                      className="font-black leading-none"
                      style={{ fontSize: "2.5rem", color: "#fff7dd" }}
                    >
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span style={{ color: "rgba(255,247,221,0.4)", marginBottom: "4px" }}>/mo</span>
                  </div>
                ) : (
                  <span className="font-black text-4xl" style={{ color: "#fff7dd" }}>
                    Custom
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm"
                    style={{ color: "rgba(255,247,221,0.6)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M2 7l3 3 7-6" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
                style={
                  plan.highlight
                    ? { background: "#e8a85f", color: "#080808" }
                    : { border: "1px solid rgba(232,168,95,0.2)", color: "#fff7dd" }
                }
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#f5d49a";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(232,168,95,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#e8a85f";
                  } else {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(232,168,95,0.2)";
                  }
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "rgba(255,247,221,0.3)" }}>
          All plans include onboarding, setup, and the first month of optimisation. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
