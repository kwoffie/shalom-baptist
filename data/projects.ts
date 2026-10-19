// Church projects — current and completed. Add new projects here as the church announces them.

export interface ChurchProject {
  title: string;
  status: "current" | "completed" | "upcoming";
  year?: string;
  description: string;
  category: string;
  image?: string; // path under /public/images/projects/
}

export const projects: ChurchProject[] = [
  {
    title: "ROAR 2026 — 40 Days of Fasting & Prayers",
    status: "current",
    year: "23 Sept – 1 Nov 2026",
    description:
      "Forty days of fasting and prayers with guest speakers Elder Kofi Asumadu, Bishop Yaw Owusu Ansah, Evangelist Dr. Akwasi Dankor, Rev Baffour Awuah and Rev Ernest Amoah Appiah. Our latest church-wide programme.",
    category: "Ministry",
    image: "/images/projects/roar-40-days-fasting.png",
  },
  {
    title: "Year Theme Programme — 2026",
    status: "current",
    year: "2026",
    description:
      "Rolling out our 2026 annual theme across worship, fellowships and community outreach for the year.",
    category: "Ministry",
    image: "/images/projects/2026-year-theme.jpg",
  },
  {
    title: "Sunday School & Children's Ministry Programme",
    status: "current",
    year: "Ongoing",
    description:
      "Structured lessons, songs and activities for our children and young people each Sunday.",
    category: "Ministry",
    image: "/images/projects/church-service-36.jpeg",
  },
  {
    title: "Year Theme Programme — 2025",
    status: "completed",
    year: "2025",
    description:
      "The 2025 annual theme was carried through our worship services, fellowships and special events.",
    category: "Ministry",
    image: "/images/themes/2025-main-theme.jpg",
  },
  {
    title: "Year Theme Programme — 2024",
    status: "completed",
    year: "2024",
    description:
      "The 2024 annual theme guided the church's worship, teaching and community life.",
    category: "Ministry",
    image: "/images/themes/2024-main-theme.jpg",
  },
  {
    title: "Year Theme Programme — 2023",
    status: "completed",
    year: "2023",
    description:
      "The 2023 annual theme and programme shaped a year of worship, growth and fellowship.",
    category: "Ministry",
    image: "/images/themes/2023-main-theme.jpg",
  },
  {
    title: "Community Outreach & Fellowship Events",
    status: "completed",
    year: "Ongoing",
    description:
      "Regular gatherings that bring the church and the Adwumam community together in fellowship and service.",
    category: "Community",
    image: "/images/projects/church-service.jpg",
  },
  {
    title: "Live Streaming & Online Presence",
    status: "completed",
    year: "Ongoing",
    description:
      "Streaming services and announcements via our Facebook page so members at home and abroad can stay connected.",
    category: "Media & Outreach",
    image: "/images/projects/roar-day14-11.jpeg",
  },
];