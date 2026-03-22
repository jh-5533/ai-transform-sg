const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "1 Hour",
    description:
      "We map your current workflows, identify the highest-impact automation opportunities, and define clear KPIs for your AI deployment.",
    details: ["Workflow analysis", "Bottleneck identification", "ROI projection", "Agent scope definition"],
  },
  {
    number: "02",
    title: "Build & Configure",
    duration: "1–2 Weeks",
    description:
      "Our team designs and deploys your custom AI agents — trained on your business data, integrated with your tools, and tested against real scenarios.",
    details: ["Custom agent training", "Tool integrations", "WhatsApp / web setup", "QA testing"],
  },
  {
    number: "03",
    title: "Launch & Optimise",
    duration: "Ongoing",
    description:
      "Go live with confidence. We monitor performance, collect feedback, and continuously improve your agents so they get smarter over time.",
    details: ["Live monitoring", "Performance reports", "Monthly tune-ups", "New agent rollouts"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6" style={{ background: "rgba(255,255,255,0.01)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#e8a85f" }}
          >
            How It Works
          </p>
          <h2
            className="font-black leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff7dd" }}
          >
            From first call to live AI in two weeks
          </h2>
          <p style={{ color: "rgba(255,247,221,0.5)", lineHeight: "1.7" }}>
            No lengthy IT projects. No months of back-and-forth. We move fast because we&apos;ve done this before.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 lg:p-10"
              style={{
                borderTop: "1px solid rgba(232,168,95,0.1)",
                borderRight: i < steps.length - 1 ? "1px solid rgba(232,168,95,0.08)" : "none",
              }}
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-8">
                <span
                  className="font-black text-6xl leading-none"
                  style={{ color: "rgba(232,168,95,0.1)" }}
                >
                  {step.number}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide"
                  style={{
                    background: "rgba(232,168,95,0.08)",
                    color: "#e8a85f",
                    border: "1px solid rgba(232,168,95,0.15)",
                  }}
                >
                  {step.duration}
                </span>
              </div>

              <h3
                className="font-bold text-2xl mb-4"
                style={{ color: "#fff7dd" }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,247,221,0.5)" }}
              >
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "rgba(255,247,221,0.45)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                      <path d="M2 6l2.5 2.5 5.5-5" stroke="#e8a85f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
