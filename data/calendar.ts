// Yearly calendar of programs and events — update with confirmed dates as they are announced.
// For example-only entries, date: "TBA" is used. Themes come from the annual theme graphics in /public/images/themes.

export interface CalendarEvent {
  date: string; // "12 June 2026", "TBA", or a month/year
  title: string;
  description: string;
  type: "theme" | "event" | "worship" | "fellowship" | "special";
}

export const calendarEvents: CalendarEvent[] = [
  {
    date: "23 Sept – 1 Nov 2026",
    title: "ROAR 2026 — 40 Days of Fasting & Prayers",
    description:
      "Our latest programme: forty days of fasting and prayers with guest ministers including Elder Kofi Asumadu, Bishop Yaw Owusu Ansah, Evangelist Dr. Akwasi Dankor and Rev Baffour Awuah. See the events gallery for daily moments.",
    type: "special",
  },
  {
    date: "Day 14, ROAR 2026",
    title: "The Man God Created For Eden — Rev Baffour Awuah",
    description:
      "Sermon from Day 14 of ROAR 2026 with Rev Godfred Baffour Awuah. Photos from the service are in the gallery.",
    type: "worship",
  },
  {
    date: "Fridays, ROAR 2026",
    title: "Encounter Night — Rev Ernest Amoah Appiah",
    description:
      "Friday night encounter service of the ROAR programme with Rev Ernest Amoah Appiah.",
    type: "worship",
  },
  {
    date: "2026",
    title: "Annual Theme — 2026",
    description:
      "Our 2026 year theme as announced by the church. (Theme graphic available in the gallery.)",
    type: "theme",
  },
  {
    date: "2025",
    title: "Annual Theme — 2025",
    description:
      "Our 2025 year theme. (Theme graphic available in the gallery.)",
    type: "theme",
  },
  {
    date: "2024",
    title: "Annual Theme — 2024",
    description:
      "Our 2024 year theme. (Theme graphic available in the gallery.)",
    type: "theme",
  },
  {
    date: "2023",
    title: "Annual Theme — 2023",
    description:
      "Our 2023 year theme with the church programme for the year. (Graphics available in the gallery.)",
    type: "theme",
  },
  {
    date: "TBA",
    title: "Pastor & Family Appreciation Day",
    description:
      "A special commemorative service honouring our Pastor and his family. Date announced on our Facebook page.",
    type: "special",
  },
  {
    date: "Every Sunday",
    title: "Sunday Worship Services",
    description:
      "Multiple Sunday worship services are held each week in celebration and praise.",
    type: "worship",
  },
  {
    date: "Wednesdays",
    title: "Midweek Bible Study & Prayer",
    description:
      "An evening of Bible teaching, reflection and prayer together as a church family.",
    type: "worship",
  },
  {
    date: "TBA",
    title: "Youth & Teens Camp / Retreat",
    description:
      "A retreat for our youth and teens fellowship — date to be announced.",
    type: "fellowship",
  },
  {
    date: "TBA",
    title: "Church Anniversary Service",
    description:
      "Celebrating the founding of Shalom Baptist Church with a joyful anniversary service.",
    type: "special",
  },
  {
    date: "TBA",
    title: "Community Outreach Day",
    description:
      "A day of service and outreach to the Adwumam community.",
    type: "fellowship",
  },
];

export const monthlyProgrammes = [
  {
    month: "January",
    events: ["New Year Thanksgiving Service", "Kick-off of the year's theme"],
  },
  {
    month: "February",
    events: ["Women's Fellowship meeting", "Valentine's community service"],
  },
  {
    month: "March",
    events: ["Men's Fellowship meeting", "Prayer & fasting week"],
  },
  {
    month: "April",
    events: ["Easter / Holy Week services", "Good Friday & Easter Sunday worship"],
  },
  {
    month: "May",
    events: ["Mothers' appreciation", "Children's ministry celebration"],
  },
  {
    month: "June",
    events: ["Youth & teens event", "Fathers' appreciation"],
  },
  {
    month: "July",
    events: ["Church picnic / community gathering"],
  },
  {
    month: "August",
    events: ["Annual church conference / retreat"],
  },
  {
    month: "September",
    events: ["Year theme mid-point review", "Bible study emphasis month"],
  },
  {
    month: "October",
    events: ["Harvest / thanksgiving service"],
  },
  {
    month: "November",
    events: ["Pastor & Family Appreciation Day (typical)", "Men's & Women's fellowship meetings"],
  },
  {
    month: "December",
    events: ["Christmas carols", "Christmas Eve & Christmas Day services", "Watch-night service"],
  },
];