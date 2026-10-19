// Activities & programs offered by the church — update times/details as confirmed.
export interface Activity {
  title: string;
  group?: string;
  schedule: string;
  description: string;
  icon: string; // emoji used on the Activities page
}

export const activities: Activity[] = [
  {
    title: "Sunday Worship Services",
    schedule: "Every Sunday",
    description:
      "Multiple Sunday worship services are held each week in celebration and praise. Come and worship with us — all are welcome.",
    icon: "⛪",
  },
  {
    title: "Sunday School",
    group: "Children & Youth",
    schedule: "Sundays before service",
    description:
      "Bible lessons and activities for our children and young people, held before the main worship service.",
    icon: "📖",
  },
  {
    title: "Midweek Bible Study & Prayer",
    schedule: "Wednesdays",
    description:
      "An evening of Bible teaching, reflection and prayer together as a church family.",
    icon: "🙏",
  },
  {
    title: "Pastor & Family Appreciation Days",
    schedule: "Special commemorative events",
    description:
      "Special services where we honour our Pastor and church family for their faithful service and leadership.",
    icon: "🎉",
  },
  {
    title: "Women's Fellowship",
    group: "Women",
    schedule: "Monthly fellowship",
    description:
      "A gathering for the women of the church for prayer, teaching, support and community.",
    icon: "🌸",
  },
  {
    title: "Men's Fellowship",
    group: "Men",
    schedule: "Monthly fellowship",
    description:
      "A gathering for the men of the church for fellowship, mentoring and service.",
    icon: "🛡️",
  },
  {
    title: "Youth Fellowship",
    group: "Youth",
    schedule: "Weekly / Fortnightly",
    description:
      "An engaging programme for our young people — worship, teaching, games and growth in faith.",
    icon: "🔥",
  },
  {
    title: "Teens Fellowship",
    group: "Teens",
    schedule: "Weekly",
    description:
      "A dedicated space for teenagers to worship, share and build lasting friendships in Christ.",
    icon: "🌟",
  },
  {
    title: "Children's Ministry",
    group: "Children",
    schedule: "Sundays",
    description:
      "Bible stories, songs and fun activities that introduce our youngest members to the love of God.",
    icon: "🌈",
  },
  {
    title: "Community Fellowship Gatherings",
    schedule: "Throughout the year",
    description:
      "Open gatherings that bring the church and the wider Adwumam community together in fellowship and service.",
    icon: "🤝",
  },
];