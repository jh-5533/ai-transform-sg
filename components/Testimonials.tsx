"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Before FORMA, our team was spending 4 hours a day just answering the same WhatsApp questions. Now the AI handles 85% of enquiries automatically. Our staff focus on actual sales.",
    name: "Sarah Lim",
    role: "Owner, Bloom Aesthetics",
    industry: "Wellness & Beauty",
    stat: "85% of queries automated",
  },
  {
    quote:
      "We were sceptical about AI for our law firm. But the intake agent is brilliant — it collects client details, explains our services, and books consultations while we sleep. Highly recommend.",
    name: "David Tan",
    role: "Partner, Tan & Associates",
    industry: "Legal Services",
    stat: "3× more consultations booked",
  },
  {
    quote:
      "Our F&B group runs 5 outlets. Forma built a centralised reservations agent that handles all of them via WhatsApp. No-shows dropped by 38% within the first month.",
    name: "Mei Ling Ong",
    role: "Operations Manager, The Peranakan Group",
    industry: "F&B",
    stat: "38% fewer no-shows",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#e8a85f" }}
          >
            Client Stories
          </p>
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
          >
            Results that speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Quote panel */}
          <div
            className="lg:col-span-3 rounded-2xl p-8 lg:p-12 flex flex-col justify-between"
            style={{
              background: "rgba(232,168,95,0.04)",
              border: "1px solid rgba(232,168,95,0.1)",
              minHeight: "320px",
            }}
          >
            {/* Large quote mark */}
            <svg
              width="48"
              height="36"
              viewBox="0 0 48 36"
              fill="none"
              className="mb-6 opacity-30"
            >
              <path
                d="M0 36V24C0 10.745 6.667 3.412 20 2L22 6C15.333 7.333 12 11.333 12 18H22V36H0ZM26 36V24C26 10.745 32.667 3.412 46 2L48 6C41.333 7.333 38 11.333 38 18H48V36H26Z"
                fill="#e8a85f"
              />
            </svg>

            <blockquote
              className="text-lg lg:text-xl font-medium leading-relaxed mb-8"
              style={{ color: "rgba(255,247,221,0.85)" }}
            >
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold" style={{ color: "#fff7dd" }}>
                  {testimonials[active].name}
                </p>
                <p className="text-sm" style={{ color: "rgba(255,247,221,0.4)" }}>
                  {testimonials[active].role}
                </p>
              </div>
              <div
                className="px-4 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(232,168,95,0.1)",
                  color: "#e8a85f",
                  border: "1px solid rgba(232,168,95,0.2)",
                }}
              >
                {testimonials[active].stat}
              </div>
            </div>
          </div>

          {/* Testimonial selector */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-5 rounded-xl transition-all duration-200"
                style={{
                  background: active === i ? "rgba(232,168,95,0.06)" : "transparent",
                  border: `1px solid ${active === i ? "rgba(232,168,95,0.2)" : "rgba(232,168,95,0.06)"}`,
                }}
              >
                <p
                  className="font-semibold text-sm mb-1"
                  style={{ color: active === i ? "#fff7dd" : "rgba(255,247,221,0.4)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: active === i ? "rgba(255,247,221,0.5)" : "rgba(255,247,221,0.25)" }}
                >
                  {t.industry}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
