"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/data/site";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

function isActive(path: string, href: string) {
  if (href === "/") return path === "/";
  if (href.includes("#")) return false;
  return path.startsWith(href);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setMembersOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMembersOpen(false);
  }, [pathname]);

  const members = navigation.find((n) => n.label === "Members");

  return (
    <header ref={navRef} className="sticky top-0 z-50 w-full">
      <div className="hidden bg-navy-dark text-white lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-2 text-xs">
        <div className="flex items-center gap-5">
          <a href={site.phoneHref} className="inline-flex items-center gap-1.5 hover:text-sky transition-colors">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-sky transition-colors">
            {site.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden xl:inline">{site.area}, {site.city}</span>
          <span className="hidden xl:inline items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-semibold text-mist"><Image src="/images/brand/ghana-baptist-convention-logo.webp" alt="Ghana Baptist Convention logo" width={18} height={18} className="h-[18px] w-[18px] rounded-full object-cover" />{site.denomination}</span>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title={site.facebookLabel} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-azure hover:text-white text-mist transition-colors">
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title={site.instagramLabel} className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-azure hover:text-white text-mist transition-colors">
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
      <nav className="bg-navy shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/brand/ghana-baptist-convention-logo.webp" alt="Ghana Baptist Convention logo" width={44} height={44} className="h-11 w-11 rounded-full bg-white object-cover ring-2 ring-white/30" />
            <span className="leading-tight">
              <span className="block text-lg font-bold text-white md:text-2xl">{site.name}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-sky">{site.denomination}</span>
            </span>
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 ${isActive(pathname, item.href) ? "bg-white/15" : ""}`}
                >
                  {item.label}
                </Link>
                {item.sub && membersOpen && item.label === "Members" && (
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-md bg-white shadow-xl ring-1 ring-black/5">
                    <div className="py-1">
                      {item.sub.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-azure/10 hover:text-azure">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/contact" className="ml-2 rounded-md bg-azure px-4 py-2 text-sm font-semibold text-white hover:bg-azure-dark transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              {mobileOpen ? (
                <path d="M6 18l12-12M18 6l-12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-navy-dark lg:hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${isActive(pathname, item.href) ? "bg-white/15 text-white" : "text-white/90 hover:bg-white/10"}`}
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="ml-4 flex flex-col gap-0.5">
                      {item.sub.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="block rounded-md px-3 py-1.5 text-sm text-sky hover:text-white">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="mt-1 block rounded-md bg-azure px-4 py-2 text-center text-sm font-semibold text-white">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}