export default function Contact() {
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

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: "#e8a85f" }}
        >
          Get Started
        </p>
        <h2
          className="font-black leading-tight tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
        >
          Ready to put AI to work?
        </h2>
        <p
          className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
          style={{ color: "rgba(255,247,221,0.5)" }}
        >
          Drop us a message on WhatsApp and we&apos;ll get back to you within the hour. No forms, no waiting — just a real conversation.
        </p>

        {/* What to expect */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-14">
          {[
            "Free 1-hour discovery call",
            "AI recommendations with ROI estimates",
            "Clear implementation timeline",
            "No pushy sales tactics",
          ].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm"
              style={{ color: "rgba(255,247,221,0.45)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3 3 7-6" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/6589386813"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-200"
          style={{ background: "#25D366", color: "#fff" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#1fb855";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 40px rgba(37,211,102,0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.386A9.948 9.948 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-1.07 5.5c-.19-.43-.392-.44-.573-.447L9.87 7.05c-.19 0-.49.071-.746.357-.257.285-.98.957-.98 2.333 0 1.376 1.003 2.706 1.143 2.894.14.189 1.946 3.1 4.79 4.222.669.25 1.19.4 1.596.511.671.185 1.282.16 1.765.097.538-.072 1.658-.678 1.892-1.334.234-.655.234-1.217.163-1.334-.07-.118-.257-.188-.537-.33-.28-.14-1.657-.818-1.914-.911-.257-.094-.444-.14-.63.14-.187.281-.725.912-.888 1.1-.164.188-.327.211-.607.07-.28-.14-1.182-.436-2.252-1.39-.832-.742-1.394-1.659-1.557-1.94-.164-.28-.017-.432.123-.571.126-.125.28-.328.42-.492.14-.164.187-.281.28-.469.094-.187.047-.352-.023-.492-.07-.14-.62-1.522-.852-2.08z" fill="currentColor"/>
          </svg>
          Chat with us on WhatsApp
        </a>

        <p className="mt-5 text-sm" style={{ color: "rgba(255,247,221,0.25)" }}>
          We typically reply within 60 minutes during business hours.
        </p>
      </div>
    </section>
  );
}
