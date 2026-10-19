// Central church information — edit here and it updates across the whole site.
export const site = {
  name: "Shalom Baptist Church",
  shortName: "Shalom Baptist",
  tagline: "An active religious community in Adwumam, Kumasi",
  denomination: "Ghana Baptist Convention",
  // Location
  area: "Adwumam",
  road: "off the Fawoade–Kenyasi road stretch",
  city: "Kumasi, Ghana",
  address: "Kenyasi Adwumam, Kumasi, Ghana, 00233",
  ghanaPostAddress: "Kenyasi Adwumam, Kumasi, Ghana, 00233",
  // Contact
  phoneDisplay: "024 462 7253",
  phoneHref: "tel:+233244627253",
  email: "shalombaptist5351@gmail.com",
  // Social
  facebook: "https://www.facebook.com/baptistshalom",
  facebookLabel: "facebook.com/baptistshalom",
  instagram: "https://www.instagram.com/shalom.b.c",
  instagramLabel: "@shalom.b.c",
  // Map link (Google Maps search for the area)
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Adwumam%2C+Off+Fawoade-Kenyasi+stretch%2C+Kumasi%2C+Ghana",
  // Worship & fellowship times (placeholders — update when confirmed)
  serviceTimes: [
    {
      day: "Sunday",
      items: [
        { name: "Sunday School", time: "8:00 am" },
        { name: "Morning Worship Service", time: "9:30 am" },
        { name: "Second Worship Service", time: "11:30 am" },
      ],
    },
    {
      day: "Wednesday",
      items: [{ name: "Midweek Bible Study & Prayer", time: "6:30 pm" }],
    },
    {
      day: "Friday",
      items: [{ name: "Youth & Teens Fellowship", time: "5:00 pm" }],
    },
  ],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Calendar", href: "/calendar" },
  { label: "Bible Quotes", href: "/bible-quotes" },
  { label: "Members", href: "/members", sub: [
    { label: "Our Leaders", href: "/members#leaders" },
    { label: "Elders", href: "/members#elders" },
    { label: "Possibility Singers", href: "/members#possibility-singers" },
    { label: "Instrumentalists", href: "/members#instrumentalists" },
    { label: "Women's Fellowship", href: "/members#women" },
    { label: "Men's Fellowship", href: "/members#men" },
    { label: "Youth Members", href: "/members#youth" },
    { label: "Teens Fellowship", href: "/members#teens" },
    { label: "Children's Section", href: "/members#children" },
  ]},
  { label: "Gallery", href: "/gallery" },
  { label: "Projects", href: "/projects" },
  { label: "ROAR 2026", href: "/roar" },
];