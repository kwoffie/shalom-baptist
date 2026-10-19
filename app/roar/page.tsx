import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { FacebookIcon, InstagramIcon, MapPinIcon } from "@/components/SocialIcons";
import { calendarEvents } from "@/data/calendar";
import { site } from "@/data/site";

const roarSpeakers = [
  { name: "Elder Kofi Asumadu", role: "Lead Speaker / Rotarian", bio: "Long-standing church elder and community leader. A central voice in the 40 days of fasting and prayers." },
  { name: "Bishop Yaw Owusu Ansah", role: "Guest Minister", bio: "Biblical teacher and minister who brings apostolic depth to the ROAR season." },
  { name: "Evangelist Dr. Akwasi Dankor", role: "Guest Minister", bio: "Evangelist and church planter with a passion for revival and discipleship." },
  { name: "Rev Godfred Baffour Awuah", role: "Guest Minister", bio: "Preaches through Day 14 of ROAR 2026 \u2014 The Man God Created For Eden." },
  { name: "Rev Ernest Amoah Appiah", role: "Guest Minister", bio: "Leads the Friday night encounter services during the 40-day journey." },
];

const programmeMilestones = [
  { day: "Day 1 \u2013 23 Sept 2026", title: "Welcome & Declaration", description: "Opening service: praise, worship, and the announcement of the 40-day journey." },
  { day: "Day 2 \u2013 24 Sept 2026", title: "Igniting the Fire", description: "A passionate kickoff with scripture, worship, and expectation." },
  { day: "Day 4 \u2013 26 Sept 2026", title: "Breaking Dietary Chains", description: "Faith-based guidance on food, lust, and spiritual freedom." },
  { day: "Fridays \u2013 Ongoing", title: "Encounter Nights", description: "Friday night services of worship, testimonies, and deliverance with Rev Ernest Amoah Appiah." },
  { day: "Day 14 \u2013 6 Oct 2026", title: "The Man God Created For Eden", description: "Rev Baffour Awuah expounds on what God created humanity for: to be in fellowship with Him." },
  { day: "Day 40 \u2013 1 Nov 2026", title: "ROAR: A Declaration of War", description: "Closing day: a declaration of victory, worship, and the sending forward of the congregation." },
];

const speakerImages: Record<string, string> = {
  "Elder Kofi Asumadu": "/images/speakers/elder-kofi-asumadu.jpeg",
  "Bishop Yaw Owusu Ansah": "/images/speakers/bishop-yaw-owusu-ansah.jpeg",
  "Evangelist Dr. Akwasi Dankor": "/images/speakers/evangelist-dr-akwasi-dankor.jpeg",
  "Rev Godfred Baffour Awuah": "/images/speakers/rev-baffour-awuah.jpeg",
  "Rev Ernest Amoah Appiah": "/images/speakers/rev-amoah-appiah.jpeg",
};

export default function RoarPage() {
  const specialEvents = calendarEvents.filter((e) => e.type === "special");

  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/roar/church-service-43.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Church Programme 2026"
        title="ROAR 2026 \u2014 40 Days of Fasting & Prayers"
        description="A journey of worship, prayer, and surrender. Join us from 23 September to 1 November 2026 as we ROAR together."
        transparent
      />

      {/* All ROAR photos */}
      <section id="roar-gallery" className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="All ROAR 2026 Photos"
            description="Tap any photo to view it full-screen."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a key="/images/events/roar-first-day.jpeg" href="#roar-first-day-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-first-day.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-first-day-2.jpeg" href="#roar-first-day-2-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-first-day-2.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-second-day.jpeg" href="#roar-second-day-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-second-day.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-fourth-day.jpeg" href="#roar-fourth-day-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-fourth-day.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-friday-theme.jpeg" href="#roar-friday-theme-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-friday-theme.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-00.jpeg" href="#roar-2026-day14-00-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-00.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-01.jpeg" href="#roar-2026-day14-01-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-01.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-02.jpeg" href="#roar-2026-day14-02-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-02.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-03.jpeg" href="#roar-2026-day14-03-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-03.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-04.jpeg" href="#roar-2026-day14-04-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-04.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-05.jpeg" href="#roar-2026-day14-05-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-05.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-06.jpeg" href="#roar-2026-day14-06-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-06.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-07.jpeg" href="#roar-2026-day14-07-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-07.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-08.jpeg" href="#roar-2026-day14-08-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-08.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-09.jpeg" href="#roar-2026-day14-09-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-09.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-10.jpeg" href="#roar-2026-day14-10-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-10.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-11.jpeg" href="#roar-2026-day14-11-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-11.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-2026-day14-13.jpeg" href="#roar-2026-day14-13-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-2026-day14-13.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-day14-main.jpeg" href="#roar-day14-main-jpeg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-day14-main.jpeg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
            <a key="/images/events/roar-40-days-fasting-main.jpg" href="#roar-40-days-fasting-main-jpg" className="group relative block h-44 w-full overflow-hidden rounded-xl ring-1 ring-white/10 transition-transform hover:scale-[1.02]">
              <Image src="/images/events/roar-40-days-fasting-main.jpg" alt="ROAR 2026 photo" fill className="object-cover" />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/30" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <div id="roar-first-day-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-first-day.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-first-day-2-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-first-day-2.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-second-day-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-second-day.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-fourth-day-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-fourth-day.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-friday-theme-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-friday-theme.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-00-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-00.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-01-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-01.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-02-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-02.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-03-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-03.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-04-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-04.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-05-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-05.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-06-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-06.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-07-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-07.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-08-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-08.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-09-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-09.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-10-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-10.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-11-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-11.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-2026-day14-13-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-2026-day14-13.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-day14-main-jpeg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-day14-main.jpeg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>
      <div id="roar-40-days-fasting-main-jpg" className="fixed inset-0 z-50 hidden items-center justify-center bg-navy/95 p-4 target:flex" role="dialog" aria-label="ROAR photo viewer">
        <a href="#roar-gallery" className="absolute inset-0" aria-label="Close" />
        <div className="relative block max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl">
          <Image src="/images/events/roar-40-days-fasting-main.jpg" alt="ROAR 2026 photo full view" width={1200} height={900} className="h-auto max-h-[85vh] w-full object-contain bg-navy" />
        </div>
        <a href="#roar-gallery" className="absolute right-6 top-6 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white" aria-label="Close viewer">Close</a>
      </div>

      {/* What is ROAR */}
      <section className="bg-navy-dark/80 backdrop-blur-md py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">What is ROAR 2026?</h2>
              <div className="mt-4 space-y-4 text-mist/90 leading-relaxed">
                <p>ROAR 2026 is our 40-day season of fasting and prayers. It is a time to draw close to God, humble ourselves, and lift our voices in worship. Through the programme, we seek a deeper encounter with God, revival in our individual lives, and a fresh commission to take back the kingdom.</p>
                <p>The theme of the season echoes the call "to ROAR" — to declare God's goodness, to stand firm in faith, and to lead others into worship. Each day brings a new teaching, a new worship moment, and a new step of surrender.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { label: "40 days of fasting & prayer", desc: "Prolonged devotion from 23 September to 1 November 2026." },
                { label: "Guest ministers", desc: "Elder Kofi Asumadu, Bishop Yaw Owusu Ansah, Evangelist Dr. Akwasi Dankor, Rev Baffour Awuah, Rev Ernest Amoah Appiah." },
                { label: "Daily worship", desc: "Consistent praise, preaching, testimonies, and prayer points." },
                { label: "Prayer and fasting", desc: "From weekday fasts to Friday night encounter services." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                  <div className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-azure/20 text-sky">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display text-sm font-bold text-white">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-mist/80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme milestones */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="The Journey"
            title="ROAR 2026 Milestones"
            description="Key moments across the 40 days of fasting and prayers."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmeMilestones.map((m) => (
              <div key={m.day} className="rounded-2xl bg-white/12 p-6 shadow-sm ring-1 ring-azure/45">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky">{m.day}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist/75">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-navy-dark/80 backdrop-blur-md py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Guest Ministers"
            title="Roar 2026 Speakers & Ministers"
            description="Meet the men of God who will lead us through this season of fasting and prayer."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roarSpeakers.map((speaker) => (
              <div key={speaker.name} className="overflow-hidden rounded-2xl bg-white/12 p-6 shadow-sm ring-1 ring-azure/45">
                {speakerImages[speaker.name] ? (
                  <span className="relative h-40 w-full">
                    <Image src={speakerImages[speaker.name]} alt={speaker.name} fill className="object-cover" />
                  </span>
                ) : (
                  <div className="flex h-40 w-full items-center justify-center rounded-xl bg-white/15">
                    <span className="text-4xl">🙏</span>
                  </div>
                )}
                <h3 className="mt-4 font-display text-lg font-bold text-white">{speaker.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky">{speaker.role}</p>
                <p className="mt-3 text-sm leading-6 text-mist/75">{speaker.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme overview */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="Weekly Highlights"
            title="ROAR 2026 Programme at a Glance"
            description="How the 40 days are structured. (Service times confirmed on our Facebook page.)"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Sundays", desc: "Morning worship + mid-service fasting segments", icon: "☀️" },
              { label: "Wednesdays", desc: "Midweek Bible study & prayer with fasting focus", icon: "📖" },
              { label: "Fridays", desc: "Evening encounter service with guest minister", icon: "🌙" },
              { label: "Daily", desc: "Prayer points, testimony time, and fasting hours", icon: "🙏" },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl bg-white/12 p-6 shadow-sm ring-1 ring-azure/45">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{f.label}</h3>
                <p className="mt-2 text-sm leading-6 text-mist/75">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-navy-dark/80 backdrop-blur-md py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white">Join the ROAR</h2>
          <p className="mt-4 text-mist/90">Join us at Kenyasi Adwumam, off the Fawoade–Kenyasi road stretch, Kumasi, Ghana, or tune in through our Facebook page for live streaming.<br />
          <Link href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-azure px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky transition-colors">
            <FacebookIcon className="h-4 w-4" />
            Follow on Facebook
          </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
