"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 499, annual: 399 },
    description: "Perfect for SMBs deploying their first AI agent.",
    features: [
      "1 AI Agent (your choice)",
      "WhatsApp or Website integration",
      "Up to 1,000 conversations/mo",
      "Standard response templates",
      "Email support",
      "Monthly performance report",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: { monthly: 999, annual: 799 },
    description: "For growing businesses ready to automate multiple workflows.",
    features: [
      "Up to 3 AI Agents",
      "WhatsApp + Website + Email",
      "Up to 5,000 conversations/mo",
      "CRM & calendar integrations",
      "Priority support (24hr response)",
      "Weekly performance reports",
      "Agent optimisation sessions",
    ],
    cta: "Start Growing",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: { monthly: null, annual: null },
    description: "For businesses with complex needs and multiple touchpoints.",
    features: [
      "Unlimited AI Agents",
      "All channels + custom integrations",
      "Unlimited conversations",
      "Custom training & fine-tuning",
      "Dedicated account manager",
      "SLA-backed support",
      "Quarterly business reviews",
    ],
    cta: "Talk to Us",
    highlight: false,
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
              className="text-sm font-medium"
              style={{ color: !annual ? "#fff7dd" : "rgba(255,247,221,0.4)" }}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0"
              style={{ background: annual ? "#e8a85f" : "rgba(255,255,255,0.1)" }}
            >
              <span
                className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200"
                style={{ transform: annual ? "translateX(26px)" : "translateX(4px)" }}
              />
            </button>
            <span
              className="text-sm font-medium"
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

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full"
                  style={{ background: "#e8a85f", color: "#080808" }}
                >
                  {plan.badge}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className="font-bold text-lg mb-2"
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
                  <span
                    className="font-black text-4xl"
                    style={{ color: "#fff7dd" }}
                  >
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
                className="text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
                style={
                  plan.highlight
                    ? { background: "#e8a85f", color: "#080808" }
                    : {
                        border: "1px solid rgba(232,168,95,0.2)",
                        color: "#fff7dd",
                      }
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
