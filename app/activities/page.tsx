import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { activities } from "@/data/activities";

export default function ActivitiesPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/activities/church-service-39.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Get Involved"
        title="Activities & Programs"
        description="Sunday worship, fellowships and gatherings for every age — there is a place for everyone at Shalom Baptist Church."
        transparent
      >
        <div className="mt-6 inline-flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Activities</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Music</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Programs</span>
        </div>
      </PageHeader>

      {/* Activities grid */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Weekly & Monthly Activities"
            description="Our regular activities bring the church family together in worship, learning and fellowship."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.title} className="group rounded-2xl bg-white/15 p-7 ring-1 ring-azure/45 transition-all hover:shadow-lg hover:ring-azure/50">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/12 text-3xl shadow-sm" aria-hidden="true">
                    {activity.icon}
                  </span>
                  <div>
                    {activity.group && (
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-sky">{activity.group}</p>
                    )}
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-sky">{activity.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-mist/75">{activity.description}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-white">
                  <span aria-hidden="true">📊</span> {activity.schedule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Weekly Schedule"
            title="When We Meet"
            description="Our regular gathering times across the week."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {site.serviceTimes.map((group) => (
              <div key={group.day} className="rounded-2xl bg-white/12 p-7 shadow-md ring-1 ring-white/10">
                <h3 className="font-display text-xl font-bold text-white">{group.day}</h3>
                <div className="shalom-divider mt-2 w-12" aria-hidden="true" />
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between rounded-lg bg-white/15 px-4 py-3">
                      <span className="font-medium text-white">{item.name}</span>
                      <span className="ml-auto font-bold text-sky">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-mist/70">
            Times are indicative — please confirm current schedules via our{" "}
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold text-sky underline hover:text-white">Facebook page</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy/65 backdrop-blur-md ring-1 ring-gold/40 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white">Welcome to serve or join us</h2>
          <p className="mt-4 text-base leading-7 text-mist/85">
            Come worship with us this Sunday. We look forward to welcoming you into our church family.<br />
            <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white">
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}