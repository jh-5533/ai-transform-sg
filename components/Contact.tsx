"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your form backend (Formspree, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse at bottom, rgba(232,168,95,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#e8a85f" }}
            >
              Get Started
            </p>
            <h2
              className="font-black leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff7dd" }}
            >
              Ready to put AI to work?
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "rgba(255,247,221,0.5)" }}
            >
              Book a free 1-hour discovery call. We&apos;ll map your workflows, identify the highest-value
              AI opportunities, and give you a clear proposal — no obligation.
            </p>

            {/* What to expect */}
            <div className="space-y-4">
              {[
                "Workflow analysis specific to your business",
                "AI agent recommendations with ROI estimates",
                "Clear implementation timeline",
                "No pushy sales tactics — we let results speak",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(232,168,95,0.1)", border: "1px solid rgba(232,168,95,0.2)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,247,221,0.6)" }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-10 pt-10" style={{ borderTop: "1px solid rgba(232,168,95,0.08)" }}>
              <p className="text-sm mb-3" style={{ color: "rgba(255,247,221,0.35)" }}>Or reach us directly</p>
              <a
                href="mailto:hello@forma.sg"
                className="text-sm font-medium"
                style={{ color: "#e8a85f" }}
              >
                hello@forma.sg
              </a>
              <span className="mx-3" style={{ color: "rgba(255,247,221,0.2)" }}>·</span>
              <a
                href="https://wa.me/6591234567"
                className="text-sm font-medium"
                style={{ color: "#e8a85f" }}
              >
                WhatsApp us
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(232,168,95,0.1)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: "rgba(232,168,95,0.1)", border: "1px solid rgba(232,168,95,0.2)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M4 14l6 6 14-12" stroke="#e8a85f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2" style={{ color: "#fff7dd" }}>
                  Message received
                </h3>
                <p style={{ color: "rgba(255,247,221,0.5)" }}>
                  We&apos;ll be in touch within 24 hours to schedule your discovery call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,247,221,0.5)" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(232,168,95,0.1)",
                        color: "#fff7dd",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.1)")}
                      placeholder="Jane Tan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,247,221,0.5)" }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(232,168,95,0.1)",
                        color: "#fff7dd",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.1)")}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,247,221,0.5)" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(232,168,95,0.1)",
                      color: "#fff7dd",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.1)")}
                    placeholder="Your Company Pte Ltd"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,247,221,0.5)" }}>
                    Industry
                  </label>
                  <select
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 appearance-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(232,168,95,0.1)",
                      color: form.industry ? "#fff7dd" : "rgba(255,247,221,0.3)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.1)")}
                  >
                    <option value="" style={{ background: "#0f0f0f" }}>Select your industry</option>
                    {["F&B & Hospitality", "Retail & E-commerce", "Professional Services", "Healthcare & Wellness", "Real Estate", "Education", "Other"].map((opt) => (
                      <option key={opt} value={opt} style={{ background: "#0f0f0f" }}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium mb-2" style={{ color: "rgba(255,247,221,0.5)" }}>
                    What would you like to automate?
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(232,168,95,0.1)",
                      color: "#fff7dd",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(232,168,95,0.1)")}
                    placeholder="E.g. Customer enquiries via WhatsApp, appointment booking..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-semibold text-sm transition-all duration-200"
                  style={{ background: "#e8a85f", color: "#080808" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#f5d49a";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "#e8a85f";
                  }}
                >
                  Book My Free Discovery Call
                </button>

                <p className="text-center text-xs" style={{ color: "rgba(255,247,221,0.25)" }}>
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
