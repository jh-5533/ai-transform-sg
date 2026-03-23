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
        {/* Headline */}
        <h1
          className="font-black leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", color: "#fff7dd" }}
        >
          Your 24/7{" "}
          <span className="text-gold-gradient">AI Workforce</span>
        </h1>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: "rgba(255,247,221,0.55)", fontSize: "1.125rem" }}
        >
          Increase customer satisfaction. Our Agents handle all{" "}
          <span style={{ color: "#e8a85f" }}>backend operations</span>,{" "}
          <span style={{ color: "#e8a85f" }}>customer service</span>, and{" "}
          <span style={{ color: "#e8a85f" }}>lead management</span> — so your team can focus on growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/6589386813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 py-4 rounded-full font-semibold text-base transition-all duration-200"
            style={{ background: "#25D366", color: "#fff", width: "220px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1fb855";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(37,211,102,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.386A9.948 9.948 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.07 5.5c-.19-.43-.392-.44-.573-.447L9.87 7.05c-.19 0-.49.071-.746.357-.257.285-.98.957-.98 2.333 0 1.376 1.003 2.706 1.143 2.894.14.189 1.946 3.1 4.79 4.222.669.25 1.19.4 1.596.511.671.185 1.282.16 1.765.097.538-.072 1.658-.678 1.892-1.334.234-.655.234-1.217.163-1.334-.07-.118-.257-.188-.537-.33-.28-.14-1.657-.818-1.914-.911-.257-.094-.444-.14-.63.14-.187.281-.725.912-.888 1.1-.164.188-.327.211-.607.07-.28-.14-1.182-.436-2.252-1.39-.832-.742-1.394-1.659-1.557-1.94-.164-.28-.017-.432.123-.571.126-.125.28-.328.42-.492.14-.164.187-.281.28-.469.094-.187.047-.352-.023-.492-.07-.14-.62-1.522-.852-2.08z" fill="currentColor"/>
            </svg>
            WhatsApp
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 py-4 rounded-full font-semibold text-base transition-all duration-200"
            style={{ background: "#229ED9", color: "#fff", width: "220px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a8bbf";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(34,158,217,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#229ED9";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.917 7.014l-1.69 7.962c-.126.55-.461.685-.934.426l-2.58-1.902-1.244 1.196c-.138.138-.253.253-.518.253l.185-2.629 4.782-4.32c.208-.185-.045-.287-.322-.102L7.89 14.71 5.34 13.94c-.55-.173-.56-.55.115-.815l9.615-3.708c.458-.166.858.112.847.597z" fill="currentColor"/>
            </svg>
            Telegram
          </a>
        </div>

        {/* Trust signals */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm"
          style={{ color: "rgba(255,247,221,0.35)" }}
        >
          {[
            "Live in 14 days or less",
            "No technical team needed",
            "Integrates with your existing tools",
            "Scales as you grow",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3 3 7-6" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
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
