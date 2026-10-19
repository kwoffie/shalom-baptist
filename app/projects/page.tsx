import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const statusMeta = {
  current: { label: "Current", classes: "bg-azure text-white" },
  upcoming: { label: "Upcoming", classes: "bg-gold text-navy" },
  completed: { label: "Completed", classes: "bg-white/20 text-white" },
};

export default function ProjectsPage() {
  const grouped = {
    current: projects.filter((p) => p.status === "current"),
    upcoming: projects.filter((p) => p.status === "upcoming"),
    completed: projects.filter((p) => p.status === "completed"),
  };

  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/projects/roar-40-days-fasting.png" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Church Work"
        title="Our Projects"
        description="The ministries, programmes and development work of Shalom Baptist Church."
        transparent
      />

      {/* Current */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Happening Now"
            title="Current Projects"
            description="What we are working on together as a church family."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grouped.current.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-2xl bg-white/15 ring-2 ring-azure/55">
                {project.image && (
                  <span className="relative block h-52 w-full">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </span>
                )}
                <div className="p-7">
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${statusMeta.current.classes}`}>
                    {statusMeta.current.label}
                  </span>
                  {project.year && <span className="text-xs font-semibold text-mist/60">{project.year}</span>}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist/75">{project.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-sky">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      {grouped.upcoming.length > 0 && (
        <section className="glass-section py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeading eyebrow="Looking Ahead" title="Upcoming Projects" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {grouped.upcoming.map((project) => (
                <div key={project.title} className="rounded-2xl bg-white/12 p-7 shadow-md ring-1 ring-white/10">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${statusMeta.upcoming.classes}`}>
                    {statusMeta.upcoming.label}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mist/75">{project.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-sky">{project.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Have Done"
            title="Completed Projects & Milestones"
            description="Programmes and developments we have carried through together."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grouped.completed.map((project) => (
              <div key={project.title} className="rounded-2xl bg-white/12 p-7 shadow-md ring-1 ring-white/10">
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${statusMeta.completed.classes}`}>
                    ✓ {statusMeta.completed.label}
                  </span>
                  {project.year && <span className="text-xs font-semibold text-mist/60">{project.year}</span>}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist/75">{project.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-sky">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy/65 backdrop-blur-md ring-1 ring-gold/40 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Support the work of the church</h2>
          <p className="mt-4 text-base leading-7 text-mist/85">
            If you would like to support a project or learn more about giving, please get in touch with us.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${site.email}?subject=Supporting a church project`}
              className="rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white"
            >
              Email Us About Giving
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Message Us on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}