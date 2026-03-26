"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 pb-12 pt-16"
      style={{ borderTop: "1px solid rgba(232,168,95,0.08)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #e8a85f, #c8893a)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="3" fill="#080808" />
                  <path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold" style={{ color: "#fff7dd" }}>FORMA</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,247,221,0.4)" }}>
              AI Agents for Singapore&apos;s small and medium businesses. Deploy in 2 weeks. Results from day one.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href="https://wa.me/6589386813"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium transition-colors duration-200"
                style={{ color: "rgba(255,247,221,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8a85f")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.3)")}
              >
                WhatsApp
              </a>
              <a
                href="tel:+6589386813"
                className="text-xs font-medium transition-colors duration-200"
                style={{ color: "rgba(255,247,221,0.3)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8a85f")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.3)")}
              >
                +65 8938 6813
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#e8a85f" }}>
              Services
            </p>
            <ul className="space-y-3">
              {["Lead Management", "Lead Generation", "LLM Optimisation", "Customer Service Dashboard", "Internal Operations"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,247,221,0.4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff7dd")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.4)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "#e8a85f" }}>
              Company
            </p>
            <ul className="space-y-3">
              {["About", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,247,221,0.4)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff7dd")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.4)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(232,168,95,0.06)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,247,221,0.2)" }}>
            © 2025 FORMA Pte Ltd · UEN 202XXXXXXX
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255,247,221,0.2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,247,221,0.2)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
