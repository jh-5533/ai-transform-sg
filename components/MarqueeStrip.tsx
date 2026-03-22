const items = [
  "Customer Support AI",
  "Lead Qualification",
  "WhatsApp Automation",
  "Appointment Booking",
  "Invoice Processing",
  "Sales Follow-up",
  "Operations AI",
  "24/7 Availability",
  "Voice AI",
  "Document Extraction",
  "CRM Integration",
  "Multi-language Support",
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative py-5 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(232,168,95,0.08)",
        borderBottom: "1px solid rgba(232,168,95,0.08)",
        background: "rgba(232,168,95,0.02)",
      }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 text-sm font-medium tracking-wide whitespace-nowrap"
            style={{ color: "rgba(255,247,221,0.4)" }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "#e8a85f" }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
