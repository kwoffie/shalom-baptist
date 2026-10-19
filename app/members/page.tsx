import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { memberSections } from "@/data/members";

function MemberAvatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ring-4 ring-azure/55">
        <Image src={photo} alt={name} width={80} height={80} className="h-full w-full object-cover" />
      </div>
    );
  }
  const initial = name.replace(/[\[\]']/g, "").trim().charAt(0).toUpperCase();
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy font-display text-2xl font-bold text-white ring-4 ring-azure/55">
      {initial || "S"}
    </div>
  );
}

export default function MembersPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/activities/church-service-39.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Church Family"
        title="Members & Fellowships"
        description="The leaders, ministers and fellowship groups that make up the Shalom Baptist family."
        transparent
      >
        <div className="mt-6 inline-flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Leaders</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Women</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Men</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Youth</span>
        </div>
      </PageHeader>

      {/* Quick links */}
      <section className="glass-section py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {memberSections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.anchor}`}
                className="group rounded-xl bg-white/15 p-5 ring-1 ring-azure/45 transition-all hover:shadow-lg hover:ring-azure/50"
              >
                <p className="text-2xl" aria-hidden="true">{section.icon}</p>
                <h2 className="mt-2 font-display text-lg font-bold text-white group-hover:text-sky">{section.title}</h2>
                <p className="mt-1 text-xs leading-5 text-mist/70">{section.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      {memberSections.map((section) => (
        <section key={section.id} id={section.anchor} className="glass-section py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/12 text-3xl shadow-md" aria-hidden="true">
                {section.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky">{section.title}</p>
                <h2 className="font-display text-3xl font-bold text-white">{section.subtitle}</h2>
              </div>
            </div>
            <div className="shalom-divider mt-4 w-24" aria-hidden="true" />
            <p className="mt-5 max-w-3xl text-base leading-7 text-mist/75">{section.description}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.members.map((member) => (
                <div key={member.name} className="rounded-2xl bg-white/12 p-7 shadow-md ring-1 ring-white/10">
                  <div className="flex items-center gap-4">
                    <MemberAvatar name={member.name} photo={member.photo} />
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold text-white">{member.name}</h3>
                      <p className="mt-1 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-sky">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  {member.blurb && (
                    <p className="mt-4 text-sm leading-6 text-mist/75">{member.blurb}</p>
                  )}
                </div>
              ))}
              {section.members.length % 3 !== 0 && (
                <div className="rounded-2xl border-2 border-dashed border-azure/40 bg-white/60 p-7">
                  <p className="text-2xl" aria-hidden="true">➕</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">Are you a member of this fellowship?</h3>
                  <p className="mt-2 text-sm leading-6 text-mist/70">
                    We will happily feature your name and story here. Get in touch with the church to be added.
                  </p>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-azure px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky">
                    Contact Us →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}