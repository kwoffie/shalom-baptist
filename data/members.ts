// Church members & leadership — update names and roles as they are confirmed.
// Photos should be placed in /public/images/members/ and referenced below.

export interface Member {
  name: string;
  role: string;
  blurb?: string;
  photo?: string; // path under /public/images/members/
}

export interface MemberSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  anchor: string;
  members: Member[];
}

export const memberSections: MemberSection[] = [
  {
    id: "leaders",
    title: "Our Leaders & Ministers",
    subtitle: "Reverend, Head Pastor & Ministers",
    description:
      "The spiritual leadership of Shalom Baptist Church — our Reverend, Head Pastor and the ministers who guide our congregation with faith and wisdom.",
    icon: "🙌",
    anchor: "leaders",
    members: [
      {
        name: "Reverend Appiah A. Earnest",
        role: "Reverend",
        blurb: "The Reverend of Shalom Baptist Church — oversight of the congregation and spiritual guidance of the church family.",
        photo: "/images/members/Reverend Appiah A. Earnest 1.jpeg",
      },
      {
        name: "Mr. Oye",
        role: "Minister",
        blurb: "One of the ministers serving Shalom Baptist Church in worship, teaching and care.",
        photo: "/images/members/Mr. Oye.png",
      },
      {
        name: "Church Leaders",
        role: "Leadership Team",
        blurb: "The leaders of Shalom Baptist Church serving together in faith and fellowship.",
        photo: "/images/members/church-leaders.jpeg",
      },
    ],
  },
  {
    id: "elders",
    title: "Elders",
    subtitle: "Guiding the church with wisdom",
    description:
      "The elders of Shalom Baptist Church provide spiritual guidance, wisdom and oversight to the congregation, directing the affairs of the church with faith and integrity.",
    icon: "📖",
    anchor: "elders",
    members: [
      {
        name: "Elders of Shalom",
        role: "Elder",
        blurb: "An elder of Shalom Baptist Church — providing spiritual guidance and wisdom to the congregation.",
        photo: "/images/members/Elder.jpeg",
      },
      {
        name: "Elders of Shalom",
        role: "Elder",
        blurb: "An elder of Shalom Baptist Church — providing spiritual guidance and wisdom to the congregation.",
        photo: "/images/members/Elder 1.jpeg",
      },
    ],
  },
  {
    id: "possibility-singers",
    title: "Possibility Singers",
    subtitle: "Praising through song",
    description:
      "The Possibility Singers of Shalom Baptist Church lead the congregation in worship through heartfelt praise and song, lifting every voice to glorify God.",
    icon: "🎵",
    anchor: "possibility-singers",
    members: [
      {
        name: "Possibility Singers",
        role: "Choir — Praising Through Song",
        blurb: "The Possibility Singers leading praise and worship at Shalom Baptist Church.",
        photo: "/images/members/possibility-singers.jpeg",
      },
      {
        name: "Shalom Choir",
        role: "Choir — Praising Through Song",
        blurb: "Voices raised together in worship and praise unto the Lord.",
        photo: "/images/members/choir.jpeg",
      },
    ],
  },
  {
    id: "instrumentalists",
    title: "Instrumentalists",
    subtitle: "Making music unto the Lord",
    description:
      "The instrumentalists of Shalom Baptist Church use their gifts to accompany worship and bring glory to God through music.",
    icon: "🎹",
    anchor: "instrumentalists",
    members: [
      {
        name: "Shalom Instrumentalists",
        role: "Instrumentalist",
        blurb: "Serving the Lord through music — accompanying worship and bringing glory to God.",
        photo: "/images/members/Instrumentalist.jpeg",
      },
      {
        name: "Shalom Instrumentalists",
        role: "Instrumentalist",
        blurb: "Serving the Lord through music — accompanying worship and bringing glory to God.",
        photo: "/images/members/Instrumentalist 1.jpeg",
      },
      {
        name: "Shalom Instrumentalists",
        role: "Instrumentalist",
        blurb: "Serving the Lord through music — accompanying worship and bringing glory to God.",
        photo: "/images/members/instrumentalist-new-1.jpeg",
      },
      {
        name: "Shalom Instrumentalists",
        role: "Instrumentalist",
        blurb: "Serving the Lord through music — accompanying worship and bringing glory to God.",
        photo: "/images/members/instrumentalist-new-2.jpeg",
      },
      {
        name: "Shalom Instrumentalists",
        role: "Instrumentalist",
        blurb: "Serving the Lord through music — accompanying worship and bringing glory to God.",
        photo: "/images/members/instrumentalist-new-3.jpeg",
      },
      {
        name: "Shalom Instrumentalists",
        role: "Instrumentalist",
        blurb: "Serving the Lord through music — accompanying worship and bringing glory to God.",
        photo: "/images/members/instrumentalist-new-4.jpeg",
      },
    ],
  },
  {
    id: "women",
    title: "Women's Fellowship",
    subtitle: "Sisters united in faith",
    description:
      "The Women's Fellowship brings together the women of Shalom Baptist Church for prayer, teaching, support and service to the community.",
    icon: "🌸",
    anchor: "women",
    members: [
      {
        name: "Shalom Sisters",
        role: "Women's Fellowship",
        blurb: "Sisters united in faith — supporting, encouraging and serving one another in love.",
        photo: "/images/members/women-1.jpeg",
      },
      {
        name: "Shalom Sisters",
        role: "Women's Fellowship",
        blurb: "Sisters united in faith — supporting, encouraging and serving one another in love.",
        photo: "/images/members/women-2.jpeg",
      },
      {
        name: "Shalom Sisters",
        role: "Women's Fellowship",
        blurb: "Sisters united in faith — supporting, encouraging and serving one another in love.",
        photo: "/images/members/women-3.jpeg",
      },
      {
        name: "Shalom Sisters",
        role: "Women's Fellowship",
        blurb: "Sisters united in faith — supporting, encouraging and serving one another in love.",
        photo: "/images/members/women-4.jpeg",
      },
    ],
  },
  {
    id: "men",
    title: "Men's Fellowship",
    subtitle: "Brothers in Christ",
    description:
      "The Men's Fellowship gathers the men of the church for fellowship, mentoring, prayer and service in the church and community.",
    icon: "🛡️",
    anchor: "men",
    members: [
      {
        name: "Shalom Brothers",
        role: "Brothers in Christ",
        blurb: "Brothers united in Christ — mentoring, praying and serving together in the church and community.",
        photo: "/images/members/men-1.jpeg",
      },
      {
        name: "Shalom Brothers",
        role: "Brothers in Christ",
        blurb: "Brothers united in Christ — mentoring, praying and serving together in the church and community.",
        photo: "/images/members/men-2.jpeg",
      },
      {
        name: "Shalom Brothers",
        role: "Brothers in Christ",
        blurb: "Brothers united in Christ — mentoring, praying and serving together in the church and community.",
        photo: "/images/members/men-3.jpeg",
      },
    ],
  },
  {
    id: "youth",
    title: "Youth Members",
    subtitle: "The young people of the church",
    description:
      "Our youth members are the energy of Shalom Baptist Church — active in worship, music, service and church life.",
    icon: "🔥",
    anchor: "youth",
    members: [
      {
        name: "Shalom Youth",
        role: "Youth Coordinator",
        blurb: "The young people of the church — active in worship, music, service and church life.",
        photo: "/images/members/youth-1.jpeg",
      },
      {
        name: "Shalom Youth",
        role: "Youth Member",
        blurb: "An active member of the youth fellowship.",
        photo: "/images/members/youth-2.jpeg",
      },
      {
        name: "Shalom Youth",
        role: "Youth Member",
        blurb: "An active member of the youth fellowship.",
        photo: "/images/members/youth-3.jpeg",
      },
      {
        name: "Shalom Youth",
        role: "Youth Member",
        blurb: "An active member of the youth fellowship.",
        photo: "/images/members/youth-4.jpeg",
      },
      {
        name: "Shalom Youth",
        role: "Youth Member",
        blurb: "An active member of the youth fellowship.",
        photo: "/images/members/youth-5.jpeg",
      },
    ],
  },
];

// Simple summary cards shown in the Members page intro.
export const memberSectionLinks = memberSections.map((s) => ({
  title: s.title,
  anchor: s.anchor,
  icon: s.icon,
  description: s.description,
}));