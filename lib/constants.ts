export const COUPLE = {
  first: "إسلام",
  second: "خلود",
  firstLatin: "Eslam",
  secondLatin: "Kholoud",
  monogram: "إ خ",
} as const;

/** Saturday 28 November 2026, 19:00 Arabia Standard Time */
export const EVENT_ISO = "2026-11-28T19:00:00+03:00";

export const EVENT_LABEL = {
  weekday: { ar: "السبت", en: "Saturday" },
  date: { ar: "٢٨ نوفمبر", en: "28 November" },
  year: { ar: "٢٠٢٦", en: "2026" },
  gregorian: "28 November 2026",
  gregorianCaps: "NOVEMBER 28, 2026",
  day: "28",
  month: "11",
  yearNum: "2026",
} as const;

export const VENUE = {
  name: { ar: "دار الأشغال العسكرية — قاعة كريستال", en: "Military Works House — Crystal Hall" },
  address: {
    ar: "دار الأشغال العسكرية، قاعة كريستال",
    en: "Military Works House, Crystal Hall",
  },
  mapsUrl:
    "https://www.google.com/maps/place/%D8%AF%D8%A7%D8%B1+%D8%A7%D9%84%D8%A3%D8%B4%D8%BA%D8%A7%D9%84+%D8%A7%D9%84%D8%B9%D8%B3%D9%83%D8%B1%D9%8A%D8%A9%E2%80%AD/@29.9488673,31.2635317,17z/data=!3m1!4b1!4m6!3m5!1s0x145839811a5025df:0xd4f6d087deb6f114!8m2!3d29.9488673!4d31.2635317!16s%2Fg%2F11mqlq39g6?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  time: { ar: "٧:٠٠ مساءً", en: "7:00 PM" },
} as const;

export const TIMELINE = [
  {
    time: { ar: "٧:٠٠ مساءً", en: "7:00 PM" },
    title: { ar: "حفل الزفاف", en: "Wedding Ceremony" },
  },
] as const;

export type Lang = "ar" | "en";
export type Localized = Record<Lang, string>;

export const COPY = {
  together: {
    ar: "معًا مكانٌ جميل أن نكون فيه",
    en: "Together is a beautiful place to be",
  },
  togetherForever: { ar: "معًا إلى الأبد", en: "Together Forever" },
  eventOf: { ar: "حفل زفاف", en: "The wedding of" },
  joinTitle: {
    ar: "حفل زفافنا",
    en: "Our Wedding",
  },
  joinBody: {
    ar: "بكل الحب والسعادة ندعوكم لمشاركتنا أجمل لحظات العمر، والاحتفال بزفافنا وسط الأهل والأصدقاء",
    en: "With love and joy, we invite you to share the most beautiful moments of our lives and celebrate our wedding among family and friends.",
  },
  dateCardLabel: { ar: "موعد الزفاف", en: "Wedding Date" },
  dateCardNote: {
    ar: "بكل الحب والسعادة ندعوكم لحضور حفل زفافنا، ونحلم أن تكون أولى ذكرياتها محاطة بوجوه نحبها وقلوب نتمنى وجودها دائمًا.",
    en: "With love and joy, we invite you to attend our wedding. We dream of creating our first memories as a married couple while surrounded by the faces we love—people whose presence we always cherish.",
  },
  verseShort: {
    ar: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً",
    en: "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy.",
  },
  verseFull: {
    ar: "﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ﴾",
    en: "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who reflect.",
  },
  verseSource: { ar: "سورة الروم — ٢١", en: "Surah Ar-Rum — 30:21" },
  scroll: { ar: "تابعوا", en: "Scroll" },
  day: { ar: "اليوم", en: "Day" },
  month: { ar: "الشهر", en: "Month" },
  yearWord: { ar: "السنة", en: "Year" },
  timeLocation: { ar: "الوقت والمكان", en: "Time & Location" },
  openMaps: { ar: "فتح في خرائط جوجل", en: "Open in Google Maps" },
  countdown: { ar: "العدّ التنازلي", en: "Countdown" },
  until: { ar: "حتى ٢٨ نوفمبر ٢٠٢٦", en: "Until 28 November 2026" },
  timeline: { ar: "جدول الليلة", en: "Timeline of the Evening" },
  timelineBody: {
    ar: "تبدأ الليلة بحفل الزفاف في السابعة مساءً.",
    en: "The celebration begins with the wedding ceremony at 7:00 PM.",
  },
  blessing: { ar: "تهنئة للعروسين", en: "Congratulations" },
  blessingBody: {
    ar: "شاركونا الفرحة بكلمة حب لإسلام وخلود. اكتبوا اسمكم وتهنئتكم، وتُحفظ في سجل الزفاف.",
    en: "Share a word of love for Eslam and Kholoud. Write your name and message, and it will be saved in the guestbook.",
  },
  blessingName: { ar: "الاسم", en: "Name" },
  blessingNamePlaceholder: { ar: "اسمكم الكريم", en: "Your name" },
  blessingLabel: { ar: "رسالتكم", en: "Your message" },
  blessingPlaceholder: {
    ar: "اكتبوا تهنئتكم هنا…",
    en: "Write your congratulations here…",
  },
  sendBlessing: { ar: "إرسال التهنئة", en: "Send congratulations" },
  blessingSending: { ar: "جاري الحفظ…", en: "Saving…" },
  blessingThanks: {
    ar: "وصلت تهنئتكم، شكرًا لحبكم. بارك الله فيكم.",
    en: "Your congratulations reached us. Thank you for your love.",
  },
  blessingError: {
    ar: "تعذّر حفظ التهنئة. حاولوا مرة أخرى.",
    en: "Could not save your message. Please try again.",
  },
  blessingHint: {
    ar: "تُحفظ تهنئتكم بكل حب لدى العروسين.",
    en: "Your message is saved with love for the couple.",
  },
  guestbookSetup: {
    ar: "سجل التهاني غير متصل حاليًا. تعذّر حفظ الرسائل.",
    en: "The guestbook is not connected, so messages cannot be saved yet.",
  },
  readWishes: { ar: "قراءة سجل التهاني", en: "Read the guestbook" },
  wishesTitle: { ar: "سجل التهاني", en: "Guestbook" },
  wishesBody: {
    ar: "كلمات الحب التي كتبها الأهل والأصدقاء لإسلام وخلود.",
    en: "Words of love written for Eslam and Kholoud.",
  },
  wishesLoading: { ar: "جاري تحميل التهاني…", en: "Loading messages…" },
  wishesEmpty: {
    ar: "لا توجد تهاني بعد. كونوا أول المهنئين.",
    en: "No messages yet. Be the first to congratulate them.",
  },
  wishesError: {
    ar: "تعذّر تحميل سجل التهاني الآن.",
    en: "The guestbook could not be loaded.",
  },
  backToInvite: { ar: "العودة إلى الدعوة", en: "Back to the invitation" },
  inviteLine: {
    ar: "يدعوانكم لحضور حفل زفافهما",
    en: "request the pleasure of your company",
  },
  poem: {
    ar: "حين يلتقي القلبُ بالقلب، يبدأ الضوء",
    en: "When heart meets heart, the light begins",
  },
  presence: {
    ar: "وجودكم يكتمل به الفرح",
    en: "Your presence completes our joy",
  },
} as const;

export function tx(value: Localized, lang: Lang): string {
  return value[lang];
}
