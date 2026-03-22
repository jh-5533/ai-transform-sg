"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div
        ref={orbRef}
        className="absolute pointer-events-none transition-transform duration-700 ease-out"
        style={{
          width: "800px",
          height: "800px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(232,168,95,0.12) 0%, rgba(232,168,95,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Orb ring */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(232,168,95,0.08)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid rgba(232,168,95,0.04)",
          borderRadius: "50%",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
          style={{
            background: "rgba(232,168,95,0.08)",
            border: "1px solid rgba(232,168,95,0.2)",
            color: "#e8a85f",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#e8a85f", boxShadow: "0 0 6px #e8a85f" }}
          />
          AI Transformation · Singapore
        </div>

        {/* Headline */}
        <h1
          className="font-black leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", color: "#fff7dd" }}
        >
          Your 24/7{" "}
          <span className="text-gold-gradient">AI Workforce</span>
          <br />
          Built for{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "rgba(255,247,221,0.4)",
            }}
          >
            Singapore
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto text-lg leading-relaxed mb-12"
          style={{ color: "rgba(255,247,221,0.55)", fontSize: "1.125rem" }}
        >
          Stop losing customers to slow responses. Our AI Agents handle{" "}
          <span style={{ color: "#e8a85f" }}>customer queries</span>,{" "}
          <span style={{ color: "#e8a85f" }}>lead qualification</span>, and{" "}
          <span style={{ color: "#e8a85f" }}>operations</span> — so your team focuses on growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-200"
            style={{ background: "#e8a85f", color: "#080808" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f5d49a";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(232,168,95,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#e8a85f";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Book a Free Discovery Call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#process"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all duration-200"
            style={{
              border: "1px solid rgba(232,168,95,0.2)",
              color: "rgba(255,247,221,0.7)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(232,168,95,0.5)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff7dd";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(232,168,95,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,247,221,0.7)";
            }}
          >
            See How It Works
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
          style={{ color: "rgba(255,247,221,0.35)" }}
        >
          {["Deploy in 2 weeks", "No upfront dev cost", "WhatsApp + Web ready", "Singapore data residency"].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3 3 7-6" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #080808)" }}
      />
    </section>
  );
}
