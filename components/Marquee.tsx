"use client";

const items = [
  "Full Stack Development",
  "AI / ML Enthusiast",
  "Creative Developer",
  "Clean Code",
  "UI / UX Design",
  "Build — Ship — Iterate",
  "Open For Work",
];

const Row = ({ reverse = false, dark = false }: { reverse?: boolean; dark?: boolean }) => {
  const sequence = [...items, ...items];
  return (
    <div
      className="marquee-mask flex w-full overflow-hidden border-y-2 border-ink py-3"
      style={dark ? {} : { transform: "rotate(-1.2deg)" }}
    >
      <div
        className={`animate-marquee flex w-max shrink-0 items-center gap-8 pr-8 ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {sequence.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-8 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-[0.18em] ${
              dark ? "text-cream" : "text-ink"
            }`}
          >
            {item}
            <span className={dark ? "text-yellow" : "text-accent"}>///</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Marquee() {
  return (
    <div aria-hidden className="relative z-20 select-none">
      {/* dark ribbon */}
      <div className="border-y-2 border-ink bg-ink shadow-[0_6px_0_0_#111]">
        <Row dark />
      </div>
      {/* contrast ribbon below */}
      <div className="mb-6 flex w-full flex-col justify-end">
        <Row reverse dark={false} />
      </div>
    </div>
  );
}