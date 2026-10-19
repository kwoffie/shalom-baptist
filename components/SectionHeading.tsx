interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`mb-10 max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
      <div className={`shalom-divider mt-3 w-24 ${align === "center" ? "mx-auto" : ""}`} aria-hidden="true" />
      {description && <p className="mt-4 text-base leading-7 text-mist/75">{description}</p>}
    </div>
  );
}