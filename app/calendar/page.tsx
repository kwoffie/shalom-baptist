import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { calendarEvents, monthlyProgrammes } from "@/data/calendar";
import { site } from "@/data/site";

const themeFiles = [
  { year: "2023", file: "2023-main-theme.jpg" },
  { year: "2023", file: "2023-program.jpg" },
  { year: "2024", file: "2024-main-theme.jpg" },
  { year: "2025", file: "2025-main-theme.jpg" },
  { year: "2025", file: "2025-theme.jpg" },
  { year: "2026", file: "2026-main-theme.jpg" },
];

const typeStyles: Record<string, string> = {
  theme: "bg-navy text-white",
  special: "bg-gold text-navy",
  worship: "bg-azure text-white",
  fellowship: "bg-white/20 text-white",
};

export default function CalendarPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/brand/calendar-bg.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Yearly Calendar"
        title="Annual Programmes & Events"
        description="Our yearly themes, special services and the church programme through the year."
        transparent
      />

      {/* Annual themes */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Themes"
            title="Yearly Theme Graphics"
            description="Each year, Shalom Baptist Church carries a guiding theme through its worship, programs and evangelism."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {themeFiles.map((theme) => (
              <div key={theme.file} className="group relative overflow-hidden rounded-2xl bg-white/12 shadow-md ring-1 ring-white/10">
                <Image
                  src={`/images/themes/${theme.file}`}
                  alt={`Shalom Baptist Church ${theme.year} annual theme${theme.file.includes("program") ? " programme" : ""}`}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover"
                />
                <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-r from-navy/90 to-azure/80 px-4 py-2.5">
                  <p className="text-sm font-bold text-white">Annual Theme {theme.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events list */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Mark Your Calendar"
            title="Key Dates & Programs"
            description="Regular and special events across the church year. Stay tuned to our Facebook page for confirmed dates."
          />
          <div className="flex flex-col gap-5">
            {calendarEvents.map((event) => (
              <div key={event.title} className="flex flex-col rounded-2xl bg-white/15 p-6 ring-1 ring-azure/45 sm:flex-row sm:items-start">
                <div className="flex h-16 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-navy text-white">
                  <span className="font-display text-sm font-bold leading-none">{event.date}</span>
                </div>
                <div className="mt-3 flex-1 sm:mt-0 sm:ml-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${typeStyles[event.type] ?? typeStyles.fellowship}`}>
                      {event.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">{event.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-mist/75">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Monthly programme */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Through the Year"
            title="Monthly Programme Guide"
            description="A guide to what typically happens through the year — dates are confirmed closer to the time."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {monthlyProgrammes.map((month) => (
              <div key={month.month} className="rounded-2xl bg-white/12 p-6 shadow-sm ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-azure font-display text-sm font-bold text-white">
                    {month.month.slice(0, 3)}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">{month.month}</h3>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5 text-sm text-mist/75">
                  {month.events.map((eventItem) => (
                    <li key={eventItem} className="flex items-start gap-2">
                      <span className="text-sky" aria-hidden="true">•</span>
                      <span>{eventItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy/65 backdrop-blur-md ring-1 ring-gold/40 py-14 text-center">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Stay up to date</h2>
          <p className="mt-4 text-base leading-7 text-mist/85">
            Confirmations and changes to dates are announced regularly on our Facebook page.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white"
          >
            Follow Us on Facebook →
          </a>
        </div>
      </section>
    </div>
  );
}