import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import { site } from "@/data/site";

const themeFiles = [
  { year: "2023", file: "2023-main-theme.jpg", label: "Annual Theme" },
  { year: "2023", file: "2023-program.jpg", label: "Year Programme" },
  { year: "2024", file: "2024-main-theme.jpg", label: "Annual Theme" },
  { year: "2025", file: "2025-main-theme.jpg", label: "Annual Theme" },
  { year: "2025", file: "2025-theme.jpg", label: "Theme Graphic" },
  { year: "2026", file: "2026-main-theme.jpg", label: "Annual Theme" },
];

export default function GalleryPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/brand/gallery-bg.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Gallery"
        title="Our Photo Gallery"
        description="Moments of worship, fellowship and community life at Shalom Baptist Church."
        transparent
      />

      {/* Main gallery */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Church Life"
            title="Fellowship & Worship Photos"
            description="Click any photo to enlarge it. Use the filters to browse by category."
          />
          <GalleryGrid />
        </div>
      </section>

      {/* Annual themes */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Themes"
            title="Annual Theme Graphics"
            description="The guiding themes for our programs through the years."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themeFiles.map((theme) => (
              <figure key={theme.file} className="overflow-hidden rounded-2xl bg-white/12 shadow-md ring-1 ring-white/10">
                <Image
                  src={`/images/themes/${theme.file}`}
                  alt={`Shalom Baptist Church ${theme.year} ${theme.label.toLowerCase()}`}
                  width={800}
                  height={600}
                  className="h-72 w-full object-cover"
                />
                <figcaption className="flex items-center justify-between px-4 py-3">
                  <span className="font-display text-base font-bold text-white">{theme.year}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-sky">{theme.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="bg-navy/65 backdrop-blur-md ring-1 ring-gold/40 py-14 text-center">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Have photos to share?</h2>
          <p className="mt-4 text-base leading-7 text-mist/85">
            We add new photos as often as we can. Follow us on Facebook for the latest moments from
            services and events.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white"
          >
            View More on Facebook →
          </a>
        </div>
      </section>
    </div>
  );
}