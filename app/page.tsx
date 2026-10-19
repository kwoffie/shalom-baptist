import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import { verseOfTheDay } from "@/data/verses";
import { activities } from "@/data/activities";
import { calendarEvents } from "@/data/calendar";
import { memberSections } from "@/data/members";
import { gallery } from "@/data/gallery";

export default function Home() {
  const featuredGalleries = gallery.slice(0, 4);

  return (
    <div className="relative">
      {/* Whole-page background */}
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/brand/home-background.jpeg" alt="" role="presentation" />
      </div>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-azure/60 to-sky/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            {site.tagline}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Welcome to
            <span className="block font-display text-gold">Shalom Baptist Church</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-mist/95 md:text-xl">
            A worshipping family in {site.area}, Kumasi — serving our community through faith,
            fellowship and outreach, under the {site.denomination}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-azure px-6 py-3 font-semibold text-white transition-colors hover:bg-sky"
            >
              Learn About Us
            </Link>
            <Link
              href="/calendar"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              2026 Programmes
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Plan a Visit
            </Link>
          </div>
          {/* Verse chip */}
          <blockquote className="mt-12 max-w-3xl border-l-4 border-gold bg-navy/40 p-4 text-sm italic leading-6 text-mist/95 backdrop-blur-sm">
            “{verseOfTheDay.text}”
            <span className="mt-1 block font-semibold text-sky">— {verseOfTheDay.reference}</span>
          </blockquote>
        </div>
      </section>

      {/* ============ WELCOME / ABOUT PREVIEW ============ */}
      <section className="glass-section py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-4 ring-azure/45">
            <Image
              src="/images/themes/2026-main-theme.jpg"
              alt="Shalom Baptist Church 2026 annual theme"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-navy/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              Our 2026 Annual Theme
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome"
              title="A church family in Adwumam, Kumasi"
              description="Shalom Baptist Church is an active religious community located in Adwumam, off the Fawoade–Kenyasi road stretch in the Kumasi area of Ghana."
            />
            <p className="text-base leading-7 text-mist/75">
              As a member church of the {site.denomination}, we regularly host multiple Sunday
              worship services, special commemorative events such as Pastor and Family Appreciation
              Days, and community fellowship gatherings. Our doors — and our hearts — are open to
              everyone.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {["Sunday Worship", "Bible Study", "Fellowships", "Community Service"].map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-sky">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-azure"
            >
              Read More About Us →
            </Link>
          </div>
        </div>
      </section>
      {/* ============ QUICK INFO CARDS ============ */}
      <section className="glass-section py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white/12 p-6 shadow-md ring-1 ring-white/10">
              <p className="text-sm font-bold uppercase tracking-wider text-sky">📍 Find Us</p>
              <p className="mt-3 text-base leading-6 text-mist/85">{site.address}</p>
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky hover:text-white">
                Open in Google Maps →
              </a>
            </div>
            <div className="rounded-xl bg-white/12 p-6 shadow-md ring-1 ring-white/10">
              <p className="text-sm font-bold uppercase tracking-wider text-sky">📞 Call Us</p>
              <a href={site.phoneHref} className="mt-3 block text-2xl font-bold text-white">{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm font-medium text-sky break-all hover:text-white">{site.email}</a>
            </div>
            <div className="rounded-xl bg-white/12 p-6 shadow-md ring-1 ring-white/10">
              <p className="text-sm font-bold uppercase tracking-wider text-sky">💬 Connect</p>
              <p className="mt-3 text-base leading-6 text-mist/85">Live streams, service announcements and updates on our social pages.</p>
              <div className="mt-4 flex gap-2">
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="rounded-md bg-azure px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky">Facebook</a>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="rounded-md bg-azure px-3 py-1.5 text-xs font-semibold text-white hover:bg-sky">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ============ SERVICE TIMES ============ */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Worship With Us"
            title="Service Times"
            description="Multiple Sunday worship services and midweek gatherings are held regularly. Come and worship with us — all are welcome."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {site.serviceTimes.map((group) => (
              <div key={group.day} className="rounded-2xl bg-white/15 p-6 ring-1 ring-azure/45">
                <h3 className="font-display text-xl font-bold text-white">{group.day}</h3>
                <div className="shalom-divider mt-2 w-12" aria-hidden="true" />
                <ul className="mt-4 flex flex-col gap-3 text-sm">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between rounded-lg bg-white/12 px-4 py-3 shadow-sm">
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

      {/* ============ VERSE OF THE DAY ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy/85 to-azure/85 py-16 backdrop-blur-md">
        <div className="pointer-events-none absolute right-10 top-0 h-64 w-64 rounded-full bg-white/5" aria-hidden="true" />
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">✝ Verse of the Day</p>
          <blockquote className="mt-6 font-display text-2xl italic leading-10 text-mist md:text-3xl">
            “{verseOfTheDay.text}”
          </blockquote>
          <p className="mt-4 font-semibold text-gold">— {verseOfTheDay.reference}</p>
          <Link
            href="/bible-quotes"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-navy transition-colors hover:bg-sky/90"
          >
            More Bible Quotes →
          </Link>
        </div>
      </section>
      {/* ============ ACTIVITIES PREVIEW ============ */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Get Involved"
            title="Our Activities & Programs"
            description="From worship to fellowships, there is a place for everyone at Shalom Baptist Church."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activities.slice(0, 4).map((activity) => (
              <div key={activity.title} className="rounded-xl bg-white/15 p-6 ring-1 ring-azure/45">
                <p className="text-3xl" aria-hidden="true">{activity.icon}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{activity.title}</h3>
                <p className="mt-2 inline-block rounded-full bg-white/12 px-3 py-1 text-xs font-semibold text-sky">{activity.schedule}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/activities" className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-azure">
              See All Activities →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ UPCOMING EVENTS PREVIEW ============ */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Mark Your Calendar"
            title="Highlights for the Year"
            description="Special services, themes and fellowships planned for the year."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {calendarEvents.slice(0, 3).map((event) => (
              <div key={event.title} className="rounded-xl bg-white/12 p-6 shadow-md ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-azure text-white font-display font-bold">
                    {event.date.length > 4 ? event.date.slice(0, 2) : event.date}
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase text-sky">{event.type}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{event.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist/75">{event.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/calendar" className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-azure">
              View the Full Calendar →
            </Link>
          </div>
        </div>
      </section>
{/* ============ GALLERY PREVIEW ============ */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Moments with Us"
            title="Photo Gallery"
            description="A glimpse of worship, fellowship and life at Shalom Baptist Church."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {featuredGalleries.map((photo) => (
              <div key={photo.src} className="group relative overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={640}
                  height={480}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery" className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-azure">
              View the Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FELLOWSHIPS PREVIEW ============ */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Our Church Family"
            title="Fellowships & Ministries"
            description="Wherever you are in life, there is a fellowship for you at Shalom Baptist Church."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ============ CONTACT CTA ============ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-dark/90 via-navy/90 to-azure/85 py-20 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Come worship with us this Sunday</h2>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-mist/90">
            {site.address}. We look forward to welcoming you into our church family.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-white">
              Get in Touch
            </Link>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Directions on Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}