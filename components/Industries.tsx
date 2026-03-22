"use client";

import { useState } from "react";

const industries = [
  {
    icon: "🍜",
    name: "F&B & Hospitality",
    useCases: ["Reservation AI via WhatsApp", "Menu inquiries & ordering", "Staff scheduling", "Customer feedback"],
  },
  {
    icon: "🛍️",
    name: "Retail & E-commerce",
    useCases: ["Order tracking & returns", "Product recommendations", "Abandoned cart follow-up", "Inventory alerts"],
  },
  {
    icon: "⚖️",
    name: "Professional Services",
    useCases: ["Client intake & onboarding", "Document collection", "Appointment scheduling", "Invoice reminders"],
  },
  {
    icon: "🏥",
    name: "Healthcare & Wellness",
    useCases: ["Appointment booking", "Pre-consultation forms", "Follow-up reminders", "Insurance queries"],
  },
  {
    icon: "🏠",
    name: "Real Estate",
    useCases: ["Lead qualification", "Viewing scheduling", "Property info requests", "Tenant support"],
  },
  {
    icon: "🎓",
    name: "Education & Training",
    useCases: ["Course enquiries", "Student onboarding", "Fee collection reminders", "Assignment submission"],
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#e8a85f" }}
          >
            Industries
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
          >
            Built for Singapore&apos;s most dynamic sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Industry tabs */}
          <div className="flex flex-col gap-2">
            {industries.map((industry, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-5 rounded-xl transition-all duration-200 flex items-center gap-4"
                style={{
                  background: active === i ? "rgba(232,168,95,0.08)" : "transparent",
                  border: active === i ? "1px solid rgba(232,168,95,0.2)" : "1px solid transparent",
                  color: active === i ? "#fff7dd" : "rgba(255,247,221,0.45)",
                }}
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="font-semibold">{industry.name}</span>
                {active === i && (
                  <svg
                    className="ml-auto"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M4 8h8M8 4l4 4-4 4" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Use cases panel */}
          <div
            className="rounded-2xl p-8 lg:p-10 sticky top-28"
            style={{
              background: "rgba(232,168,95,0.04)",
              border: "1px solid rgba(232,168,95,0.12)",
            }}
          >
            <div className="text-4xl mb-5">{industries[active].icon}</div>
            <h3 className="font-bold text-xl mb-2" style={{ color: "#fff7dd" }}>
              {industries[active].name}
            </h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,247,221,0.4)" }}>
              Common AI agent use cases
            </p>
            <ul className="space-y-3">
              {industries[active].useCases.map((uc) => (
                <li
                  key={uc}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(255,247,221,0.65)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(232,168,95,0.1)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {uc}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: "#e8a85f" }}
            >
              Get a custom plan for your industry
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
