import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/data/site";
import SocialIcons from "@/components/SocialIcons";

export default function ContactPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/brand/church-leaders.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="We would love to hear from you. Reach out for information, to plan a visit, or to join a fellowship."
        transparent
      >
        <div className="mt-6 inline-flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Contact</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Visit</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Message</span>
        </div>
      </PageHeader>

      {/* Contact cards */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/15 p-7 ring-1 ring-azure/45">
              <h2 className="mt-0 font-display text-lg font-bold text-white">Social Media</h2>
              <div className="mt-3">
                <SocialIcons variant="light" size="sm" />
              </div>
              <p className="mt-3 text-xs leading-5 text-mist/60">Live streams, announcements and updates.<br />{site.facebookLabel} · {site.instagramLabel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map embedded iframe */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="How to Get Here"
            description="We are located in Adwumam, off the Fawoade–Kenyasi road stretch, Kumasi."
          />
          <div className="overflow-hidden rounded-2xl bg-white/12 shadow-lg ring-1 ring-white/10">
            <iframe
              title="Map showing the location of Shalom Baptist Church, Adwumam, Kumasi"
              src="https://maps.google.com/maps?q=Adwumam%2C+Fawoade-Kenyasi+Kumasi+Ghana&t=m&z=14&output=embed"
              className="h-[480px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-mist/75">
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky underline hover:text-white"
            >
              Open in Google Maps in a new tab →
            </a>
          </p>
        </div>
      </section>

      {/* Direct message */}
      <section className="bg-navy/65 backdrop-blur-md ring-1 ring-gold/40 py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Message Us"
            title="Send Us a Message"
            description="Use the form below to send an email directly to the church."
          />
          <form
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
            className="mt-8 grid gap-5 rounded-2xl bg-navy-dark p-8 text-left"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-sm text-mist">
                Your Name
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm text-mist">
                Your Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky focus:outline-none"
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-sm text-mist">
              Subject
              <input
                type="text"
                name="subject"
                placeholder="What is your message about?"
                className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm text-mist">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here…"
                required
                className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-mist/60 focus:border-sky focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="rounded-lg bg-gold px-8 py-3 font-semibold text-navy transition-colors hover:bg-white"
            >
              Send Message ✉️
            </button>
            <p className="text-xs leading-5 text-mist/70">
              Note: This opens your email app with the details pre-filled. For the fastest reply, message us
              on Facebook or call the number above.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}