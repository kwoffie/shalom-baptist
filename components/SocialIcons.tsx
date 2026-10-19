import { site } from "@/data/site";

interface SocialIconsProps {
  variant?: "light" | "dark";
  size?: "sm" | "md";
}

export function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MapPinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} className={className} aria-hidden="true">
      <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export default function SocialIcons({ variant = "dark", size = "md" }: SocialIconsProps) {
  const dark = variant === "dark";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  const btn = dark
    ? "bg-azure/90 text-white hover:bg-sky hover:-translate-y-0.5"
    : "bg-white text-navy hover:bg-mist hover:-translate-y-0.5";
  const label = dark ? "text-mist/85 hover:text-white" : "text-navy/75 hover:text-navy";
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <a
        href={site.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Shalom Baptist Church on Facebook (${site.facebookLabel})`}
        title={site.facebookLabel}
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold shadow-sm transition-all ${btn}`}
      >
        <FacebookIcon className={iconSize} />
        <span>Facebook</span>
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Shalom Baptist Church on Instagram (${site.instagramLabel})`}
        title={site.instagramLabel}
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold shadow-sm transition-all ${btn}`}
      >
        <InstagramIcon className={iconSize} />
        <span>Instagram</span>
      </a>
      <a
        href={site.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Find Shalom Baptist Church on Google Maps"
        title="Find us on the map"
        className={`inline-flex items-center gap-1.5 text-xs font-semibold underline-offset-2 hover:underline ${label}`}
      >
        <MapPinIcon className="h-4 w-4" />
        Find us on the map
      </a>
    </div>
  );
}
