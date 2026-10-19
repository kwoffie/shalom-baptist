import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { memberSections } from "@/data/members";

const beliefs = [
  {
    title: "The Bible",
    text: "We believe the Bible is the inspired Word of God and our guide for faith and life.",
  },
  {
    title: "Worship & Praise",
    text: "We gather regularly — multiple times each Sunday — to praise God and grow in faith together.",
  },
  {
    title: "Community & Service",
    text: "We serve our neighbours in Adwumam and beyond through fellowship, outreach and care.",
  },
  {
    title: "Family & Fellowship",
    text: "From our children to our elders, every member is family — each fellowship supports the other.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/brand/about-bg.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="About Us"
        title="About Shalom Baptist Church"
        description="An active religious community in Adwumam, Kumasi — worshipping, serving and growing together."
        transparent
      />

      {/* Overview */}
      <section className="glass-section py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-4 ring-azure/45">
            <Image
              src="/images/themes/2025-main-theme.jpg"
              alt="Shalom Baptist Church 2025 annual theme"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A welcoming church family in the Kumasi area"
              description="Shalom Baptist Church is located in Adwumam, off the Fawoade–Kenyasi road stretch, in the Kumasi area of Ghana."
            />
            <p className="text-base leading-7 text-mist/75">
              We are a member of the {site.denomination}, and we regularly host multiple Sunday
              worship services, special commemorative events such as Pastor and Family Appreciation
              Days, and community fellowship gatherings. Our church family includes vibrant
              men&rsquo;s and women&rsquo;s fellowships, an energetic youth and teens ministry, and a
              precious children&rsquo;s section.
            </p>
            <p className="mt-4 text-base leading-7 text-mist/75">
              Whether you are visiting Kumasi or looking for a church home, you are welcome here.
              Come as you are — worship with us.
            </p>
          </div>
        </div>
      </section>
      {/* Location & information */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Visit Us"
            title="Location & Contact Details"
            description="Find us easily — we are on the Fawoade–Kenyasi stretch."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/12 p-7 shadow-md ring-1 ring-white/10">
              <h3 className="font-display text-xl font-bold text-white">📍 Where to find us</h3>
              <ul className="mt-4 space-y-2 text-base text-mist/80">
                <li><span className="font-semibold text-sky">Area:</span> {site.area}</li>
                <li><span className="font-semibold text-sky">Road:</span> {site.road}</li>
                <li><span className="font-semibold text-sky">City:</span> {site.city}</li>
                <li><span className="font-semibold text-sky">Full address:</span> {site.address}</li>
              </ul>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-azure px-6 py-3 font-semibold text-white transition-colors hover:bg-sky"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="rounded-2xl bg-white/12 p-7 shadow-md ring-1 ring-white/10">
              <h3 className="font-display text-xl font-bold text-white">📞 Contact & social</h3>
              <ul className="mt-4 space-y-2 text-base text-mist/80">
                <li>
                  <span className="font-semibold text-sky">Phone:</span>{" "}
                  <a href={site.phoneHref} className="underline hover:text-white">{site.phoneDisplay}</a>
                </li>
                <li>
                  <span className="font-semibold text-sky">Email:</span>{" "}
                  <a href={`mailto:${site.email}`} className="break-all underline hover:text-white">{site.email}</a>
                </li>
                <li>
                  <span className="font-semibold text-sky">Facebook:</span>{" "}
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{site.facebookLabel}</a>
                </li>
                <li>
                  <span className="font-semibold text-sky">Instagram:</span>{" "}
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">{site.instagramLabel}</a>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-white/15 p-3 text-sm leading-6 text-mist/75">
                Check our Facebook page for live video streams, service announcements, and the latest
                updates.
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Denomination */}
      <section className="bg-navy/65 backdrop-blur-md ring-1 ring-gold/40 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Our Denomination</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white">{site.denomination}</h2>
          <p className="mt-4 text-base leading-7 text-mist/85">
            We are affiliated with the broader traditions of the {site.denomination} — a community of
            Baptist churches across Ghana working together in faith, mission and service.
          </p>
        </div>
      </section>

      {/* What we believe */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Spirit"
            title="What We Believe & Value"
            description="The values that shape our worship, our fellowships and our service to the community."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((belief) => (
              <div key={belief.title} className="rounded-2xl bg-white/15 p-6 ring-1 ring-azure/45">
                <h3 className="font-display text-lg font-bold text-white">{belief.title}</h3>
                <p className="mt-3 text-sm leading-6 text-mist/75">{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fellowships link */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Meet the Family"
            title="Our Fellowships & Ministries"
            description="Learn about our leaders and the groups that make up our church family."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {memberSections.map((section) => (
              <Link
                key={section.id}
                href={`/members#${section.anchor}`}
                className="group rounded-xl bg-white/12 p-5 shadow-sm ring-1 ring-white/10 transition-all hover:shadow-lg hover:ring-azure/40"
              >
                <p className="text-2xl" aria-hidden="true">{section.icon}</p>
                <h3 className="mt-2 font-display text-base font-bold text-white group-hover:text-sky">{section.subtitle}</h3>
                <p className="mt-1 text-xs leading-5 text-mist/65">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}