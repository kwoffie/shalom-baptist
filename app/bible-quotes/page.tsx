import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import VerseGenerator from "@/components/VerseGenerator";
import { bibleVerses, quoteCollections, verseOfTheDay } from "@/data/verses";

export default function BibleQuotesPage() {
  return (
    <div>
      <div className="page-photo-bg" aria-hidden="true">
        <img src="/images/bible-quotes/church-service-29.jpeg" alt="" role="presentation" />
      </div>
      <PageHeader
        eyebrow="Scripture"
        title="Bible Quotes"
        description="Verses of encouragement, faith and hope from the Word of God."
        transparent
      >
        <div className="mt-6 inline-flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Scripture</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Verses</span>
          <span className="rounded-full bg-white/15 px-4 py-1.5 font-medium text-white">Devotion</span>
        </div>
      </PageHeader>

      {/* Verse generator */}
      <section className="glass-section py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <VerseGenerator />
        </div>
      </section>

      {/* Featured verse */}
      <section className="relative overflow-hidden glass-section py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">✸ Featured Verse</p>
          <blockquote className="mt-5 border-l-4 border-gold bg-white/12 p-6 text-left font-display text-xl italic leading-9 text-white shadow-md">
            "{verseOfTheDay.text}"
            <span className="mt-1 block text-right font-semibold text-sky">— {verseOfTheDay.reference}</span>
          </blockquote>
        </div>
      </section>

      {/* Collections by topic */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="By Topic"
            title="Quotes for Every Occasion"
            description="Scripture grouped by theme for devotion, services and encouragement."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {quoteCollections.map((collection) => (
              <div key={collection.topic} className="rounded-2xl bg-white/15 p-7 ring-1 ring-azure/45">
                <h2 className="font-display text-2xl font-bold text-white">{collection.topic}</h2>
                <div className="shalom-divider mt-2 w-16" aria-hidden="true" />
                <blockquote className="mt-4 border-l-4 border-azure bg-white/12 p-4 font-display text-lg italic leading-8 text-white shadow-sm">
                  "{collection.verses[0].text}"
                  <span className="mt-1 block text-right text-sm font-semibold text-sky">— {collection.verses[0].reference}</span>
                </blockquote>
                {collection.verses.slice(1).map((verse) => (
                  <blockquote key={verse.reference} className="mt-4 border-l-4 border-sky bg-white/70 p-4 font-display text-base italic leading-7 text-mist/90">
                    "{verse.text}"
                    <span className="mt-1 block text-right text-xs font-semibold text-sky/80">— {verse.reference}</span>
                  </blockquote>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full list */}
      <section className="glass-section py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            eyebrow="All Verses"
            title="Complete List of Quotes"
            description="Every verse currently featured on this page, in one list."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bibleVerses.map((verse) => (
              <div key={verse.reference} className="rounded-2xl bg-white/12 p-5 shadow-sm ring-1 ring-white/10">
                <p className="text-sm leading-6 text-mist/80">{verse.text}</p>
                <p className="mt-3 text-xs font-bold text-sky">— {verse.reference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}