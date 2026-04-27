export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} mb-10 md:mb-14`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-ink-soft text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
