"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,168,95,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #e8a85f, #c8893a)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" fill="#080808" />
              <path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ color: "#fff7dd" }}>
            FORMA
          </span>
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {["Services", "Process", "Pricing"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "rgba(255,247,221,0.5)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff7dd")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.5)")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA — WhatsApp + Telegram */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://wa.me/6589386813"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
            style={{ background: "#25D366", color: "#fff" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1fb855";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(37,211,102,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <IconWhatsApp size={15} />
            WhatsApp
          </a>

          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200"
            style={{ background: "#229ED9", color: "#fff" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a8bbf";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(34,158,217,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#229ED9";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <IconTelegram size={15} />
            Telegram
          </a>
        </div>
      </div>
    </header>
  );
}

function IconWhatsApp({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.386A9.948 9.948 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.07 5.5c-.19-.43-.392-.44-.573-.447L9.87 7.05c-.19 0-.49.071-.746.357-.257.285-.98.957-.98 2.333 0 1.376 1.003 2.706 1.143 2.894.14.189 1.946 3.1 4.79 4.222.669.25 1.19.4 1.596.511.671.185 1.282.16 1.765.097.538-.072 1.658-.678 1.892-1.334.234-.655.234-1.217.163-1.334-.07-.118-.257-.188-.537-.33-.28-.14-1.657-.818-1.914-.911-.257-.094-.444-.14-.63.14-.187.281-.725.912-.888 1.1-.164.188-.327.211-.607.07-.28-.14-1.182-.436-2.252-1.39-.832-.742-1.394-1.659-1.557-1.94-.164-.28-.017-.432.123-.571.126-.125.28-.328.42-.492.14-.164.187-.281.28-.469.094-.187.047-.352-.023-.492-.07-.14-.62-1.522-.852-2.08z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconTelegram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.917 7.014l-1.69 7.962c-.126.55-.461.685-.934.426l-2.58-1.902-1.244 1.196c-.138.138-.253.253-.518.253l.185-2.629 4.782-4.32c.208-.185-.045-.287-.322-.102L7.89 14.71 5.34 13.94c-.55-.173-.56-.55.115-.815l9.615-3.708c.458-.166.858.112.847.597z"
        fill="currentColor"
      />
    </svg>
  );
}
