/**
 * @author Phil Teare
 * using wikipedia data
 */
const isoLangs = {
  af: {
    name: "Afrikaans",
    nativeName: "Afrikaans",
  },
  sq: {
    name: "Albanian",
    nativeName: "Shqip",
  },
  ar: {
    name: "Arabic",
    nativeName: "العربية",
  },
  hy: {
    name: "Armenian",
    nativeName: "Հայերեն",
  },
  bs: {
    name: "Bosnian",
    nativeName: "bosanski jezik",
  },
  bg: {
    name: "Bulgarian",
    nativeName: "български език",
  },
  ca: {
    name: "Catalan; Valencian",
    nativeName: "Català",
  },
  zh: {
    name: "Chinese",
    nativeName: "中文 (Zhōngwén), 汉语, 漢語",
  },
  hr: {
    name: "Croatian",
    nativeName: "hrvatski",
  },
  cs: {
    name: "Czech",
    nativeName: "česky, čeština",
  },
  da: {
    name: "Danish",
    nativeName: "dansk",
  },
  nl: {
    name: "Dutch",
    nativeName: "Nederlands, Vlaams",
  },
  en: {
    name: "English",
    nativeName: "English",
  },
  et: {
    name: "Estonian",
    nativeName: "eesti, eesti keel",
  },
  fj: {
    name: "Fijian",
    nativeName: "vosa Vakaviti",
  },
  fi: {
    name: "Finnish",
    nativeName: "suomi, suomen kieli",
  },
  fr: {
    name: "French",
    nativeName: "français, langue française",
  },
  de: {
    name: "German",
    nativeName: "Deutsch",
  },
  el: {
    name: "Greek, Modern",
    nativeName: "Ελληνικά",
  },
  gu: {
    name: "Gujarati",
    nativeName: "ગુજરાતી",
  },
  ht: {
    name: "Haitian; Haitian Creole",
    nativeName: "Kreyòl ayisyen",
  },
  he: {
    name: "Hebrew (modern)",
    nativeName: "עברית",
  },
  hi: {
    name: "Hindi",
    nativeName: "हिन्दी, हिंदी",
  },
  hu: {
    name: "Hungarian",
    nativeName: "Magyar",
  },
  id: {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
  },
  ga: {
    name: "Irish",
    nativeName: "Gaeilge",
  },
  is: {
    name: "Icelandic",
    nativeName: "Íslenska",
  },
  it: {
    name: "Italian",
    nativeName: "Italiano",
  },
  iu: {
    name: "Inuktitut",
    nativeName: "ᐃᓄᒃᑎᑐᑦ",
  },
  ja: {
    name: "Japanese",
    nativeName: "日本語 (にほんご／にっぽんご)",
  },
  ko: {
    name: "Korean",
    nativeName: "한국어 (韓國語), 조선말 (朝鮮語)",
  },
  ku: {
    name: "Kurdish",
    nativeName: "Kurdî, كوردی‎",
  },
  lt: {
    name: "Lithuanian",
    nativeName: "lietuvių kalba",
  },
  lv: {
    name: "Latvian",
    nativeName: "latviešu valoda",
  },
  mg: {
    name: "Malagasy",
    nativeName: "Malagasy fiteny",
  },
  ms: {
    name: "Malay",
    nativeName: "bahasa Melayu, بهاس ملايو‎",
  },
  mt: {
    name: "Maltese",
    nativeName: "Malti",
  },
  mi: {
    name: "Māori",
    nativeName: "te reo Māori",
  },
  mr: {
    name: "Marathi (Marāṭhī)",
    nativeName: "मराठी",
  },
  ne: {
    name: "Nepali",
    nativeName: "नेपाली",
  },
  no: {
    name: "Norwegian",
    nativeName: "Norsk",
  },
  pa: {
    name: "Panjabi, Punjabi",
    nativeName: "ਪੰਜਾਬੀ, پنجابی‎",
  },
  fa: {
    name: "Persian",
    nativeName: "فارسی",
  },
  pl: {
    name: "Polish",
    nativeName: "polski",
  },
  ps: {
    name: "Pashto, Pushto",
    nativeName: "پښتو",
  },
  pt: {
    name: "Portuguese",
    nativeName: "Português",
  },
  ro: {
    name: "Romanian, Moldavian, Moldovan",
    nativeName: "română",
  },
  ru: {
    name: "Russian",
    nativeName: "русский язык",
  },
  sm: {
    name: "Samoan",
    nativeName: "gagana faa Samoa",
  },
  sr: {
    name: "Serbian",
    nativeName: "српски језик",
  },
  sk: {
    name: "Slovak",
    nativeName: "slovenčina",
  },
  sl: {
    name: "Slovene",
    nativeName: "slovenščina",
  },
  es: {
    name: "Spanish; Castilian",
    nativeName: "español, castellano",
  },
  sw: {
    name: "Swahili",
    nativeName: "Kiswahili",
  },
  sv: {
    name: "Swedish",
    nativeName: "svenska",
  },
  ta: {
    name: "Tamil",
    nativeName: "தமிழ்",
  },
  te: {
    name: "Telugu",
    nativeName: "తెలుగు",
  },
  th: {
    name: "Thai",
    nativeName: "ไทย",
  },
  ti: {
    name: "Tigrinya",
    nativeName: "ትግርኛ",
  },
  to: {
    name: "Tonga (Tonga Islands)",
    nativeName: "faka Tonga",
  },
  tr: {
    name: "Turkish",
    nativeName: "Türkçe",
  },
  ty: {
    name: "Tahitian",
    nativeName: "Reo Tahiti",
  },
  uk: {
    name: "Ukrainian",
    nativeName: "українська",
  },
  ur: {
    name: "Urdu",
    nativeName: "اردو",
  },
  vi: {
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
  },
  cy: {
    name: "Welsh",
    nativeName: "Cymraeg",
  },
};
export default isoLangs;
