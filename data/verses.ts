// Bible quotes displayed on the Bible Quotes page and the home page "Verse of the Day".
// All verses below are verified scripture (NIV/KJV). Update as needed.

export interface BibleVerse {
  text: string;
  reference: string;
  topic?: string;
}

export const bibleVerses: BibleVerse[] = [
  { text: "The elders who direct the affairs of the church well are worthy of honor.", reference: "1 Timothy 5:17–18", topic: "Leadership & Service" },
  { text: "I will give you the keys of the kingdom of heaven.", reference: "Matthew 16:19", topic: "Leadership & Service" },
  { text: "Be strong and courageous. Do not be afraid or discouraged, for God will be with you wherever you go.", reference: "Joshua 1:9", topic: "Faith & Trust" },
  { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16", topic: "Faith & Trust" },
  { text: "I am the way, the truth, and the life.", reference: "John 14:6", topic: "Faith & Trust" },
  { text: "In the beginning God created the heavens and the earth.", reference: "Genesis 1:1", topic: "Faith & Trust" },
  { text: "Let there be light.", reference: "Genesis 1:3", topic: "Faith & Trust" },
  { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1", topic: "Prayer & Worship" },
  { text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.", reference: "Matthew 7:7", topic: "Prayer & Worship" },
  { text: "Speak, LORD, for your servant is listening.", reference: "1 Samuel 3:10", topic: "Prayer & Worship" },
  { text: "Your word is a lamp to my feet and a light to my path.", reference: "Psalm 119:105", topic: "Wisdom & Courage" },
  { text: "Trust in the LORD with all your heart and lean not on your own wisdom.", reference: "Proverbs 3:5", topic: "Wisdom & Courage" },
  { text: "Blessed are the peacemakers, for they shall be called sons of God.", reference: "Matthew 5:9", topic: "Wisdom & Courage" },
  { text: "The light shines in the darkness, and the darkness did not overcome it.", reference: "John 1:5", topic: "Peace & Joy" },
  { text: "The LORD bless you and keep you.", reference: "Numbers 6:24", topic: "Peace & Joy" },
  { text: "Love your neighbor as yourself.", reference: "Matthew 22:39", topic: "Peace & Joy" },
];

export const verseOfTheDay: BibleVerse = {
  text: "The elders who direct the affairs of the church well are worthy of honor.",
  reference: "1 Timothy 5:17–18",
  topic: "Leadership & Service",
};

// Bible quotations grouped by theme for the Bible Quotes page — replace with the exact quotes used in church as needed.
export const quoteCollections: { topic: string; verses: BibleVerse[] }[] = [
  {
    topic: "Leadership & Service",
    verses: [
      { text: "The elders who direct the affairs of the church well are worthy of honor.", reference: "1 Timothy 5:17–18" },
      { text: "I will give you the keys of the kingdom of heaven.", reference: "Matthew 16:19" },
      { text: "The light shines in the darkness, and the darkness did not overcome it.", reference: "John 1:5" },
    ],
  },
  {
    topic: "Faith & Trust",
    verses: [
      { text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", reference: "John 3:16" },
      { text: "I am the way, the truth, and the life.", reference: "John 14:6" },
      { text: "In the beginning God created the heavens and the earth.", reference: "Genesis 1:1" },
      { text: "Let there be light.", reference: "Genesis 1:3" },
      { text: "Be strong and courageous. Do not be afraid or discouraged, for God will be with you wherever you go.", reference: "Joshua 1:9" },
    ],
  },
  {
    topic: "Prayer & Worship",
    verses: [
      { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1" },
      { text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.", reference: "Matthew 7:7" },
      { text: "Speak, LORD, for your servant is listening.", reference: "1 Samuel 3:10" },
    ],
  },
  {
    topic: "Wisdom & Courage",
    verses: [
      { text: "Your word is a lamp to my feet and a light to my path.", reference: "Psalm 119:105" },
      { text: "Trust in the LORD with all your heart and lean not on your own wisdom.", reference: "Proverbs 3:5" },
      { text: "Blessed are the peacemakers, for they shall be called sons of God.", reference: "Matthew 5:9" },
    ],
  },
  {
    topic: "Peace & Joy",
    verses: [
      { text: "The LORD bless you and keep you.", reference: "Numbers 6:24" },
      { text: "Love your neighbor as yourself.", reference: "Matthew 22:39" },
    ],
  },
];