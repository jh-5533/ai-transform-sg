const stats = [
  { value: "$10K+", label: "Saved in monthly expenses", sub: "per client, on average" },
  { value: "99.9%", label: "Uptime SLA", sub: "always on, always responsive" },
  { value: "24/7", label: "Always available", sub: "no sick days, no holidays" },
  { value: "14 days", label: "Time to deploy", sub: "from kickoff to live" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="rounded-3xl p-12 lg:p-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          style={{
            background: "rgba(232,168,95,0.04)",
            border: "1px solid rgba(232,168,95,0.1)",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div
                className="font-black leading-none mb-2 text-gold-gradient"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </div>
              <p className="font-semibold text-base mb-1" style={{ color: "#fff7dd" }}>
                {stat.label}
              </p>
              <p className="text-sm" style={{ color: "rgba(255,247,221,0.4)" }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
