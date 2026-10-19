import Link from "next/link";
import { site, navigation } from "@/data/site";
import SocialIcons, { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

const quickLinks = navigation.filter((n) => !n.sub);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-mist font-display text-xl font-bold">
                S
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-bold tracking-wide text-mist">Shalom Baptist Church</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-sky">Adwumam · Kumasi · Ghana</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-mist/80">
              An active religious community of the {site.denomination}, located in
              {site.area} off the {site.road}. We worship, serve and grow together
              in faith — all are welcome.
            </p>
            <div className="mt-5">
              <SocialIcons variant="dark" size="sm" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-sky">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mist/85 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-mist/85 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-sky">Fellowships</h3>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
              <li><Link href="/members#leaders" className="text-mist/85 hover:text-white">Leaders</Link></li>
              <li><Link href="/members#possibility-singers" className="text-mist/85 hover:text-white">Possibility Singers</Link></li>
              <li><Link href="/members#women" className="text-mist/85 hover:text-white">Women</Link></li>
              <li><Link href="/members#men" className="text-mist/85 hover:text-white">Men</Link></li>
              <li><Link href="/members#youth" className="text-mist/85 hover:text-white">Youth</Link></li>
              <li><Link href="/members#teens" className="text-mist/85 hover:text-white">Teens</Link></li>
              <li><Link href="/members#children" className="text-mist/85 hover:text-white">Children</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-sky">Visit Us</h3>
            <address className="mt-4 block text-sm leading-6 text-mist/85">
              {site.address}
            </address>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 text-mist/85 hover:text-white">
                <span aria-hidden="true">📞</span> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-mist/85 hover:text-white">
                <span aria-hidden="true">✉️</span> {site.email}
              </a>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mist/85 hover:text-white">
                <FacebookIcon className="h-4 w-4 text-sky" /> {site.facebookLabel}
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mist/85 hover:text-white">
                <InstagramIcon className="h-4 w-4 text-sky" /> {site.instagramLabel}
              </a>
            </div>
            <div className="mt-5 rounded-lg bg-white/10 p-3 text-xs leading-5 text-mist/80">
              <p className="font-semibold text-sky">Sunday Worship</p>
              {site.serviceTimes[0].items.map((item) => (
                <p key={item.name} className="mt-0.5">{item.name} — {item.time}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-mist/70 lg:px-8">
          © {year} {site.name} · {site.area}, {site.city} · {site.denomination}
          <span className="mx-2 text-mist/40">|</span>
          1 Timothy 5:17–18 — “The elders who direct the affairs of the church well are worthy of honor.”
        </div>
      </div>
    </footer>
  );
}