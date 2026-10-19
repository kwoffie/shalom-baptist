import Link from "next/link";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  /** When true, the header is transparent and lets the page's own
      background photo show through as one continuous layer. */
  transparent?: boolean;
}

export default function PageHeader({ eyebrow, title, description, children, backgroundImage, backgroundAlt, transparent }: PageHeaderProps) {
  return (
    <section className={`relative overflow-hidden${transparent ? "" : " bg-navy"}`}>
      {transparent ? (
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/75 via-navy/45 to-transparent" aria-hidden="true" />
      ) : (
        backgroundImage && (
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={backgroundImage}
            alt=""
            role="presentation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/75" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy-dark/70" />
        </div>
        )
      )}
      {/* decorative circles */}
      <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full bg-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white/5" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <nav className="text-xs text-white/70" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2 text-white/40" aria-hidden="true">/</span>
          <span className="text-sky">{title}</span>
        </nav>

        {eyebrow && (
          <p className="mt-6 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-lg leading-7 text-mist/90">{description}</p>}
        {children}
      </div>
    </section>
  );
}