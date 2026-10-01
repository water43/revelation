export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export const ui = {
  zh: {
    brand: 'Revelation',
    tagline: '历史上的文学家、哲学家与思想者',
    cta: '进入图鉴',
    figures: '图鉴',
    home: '首页',
    all: '全部',
    categories: {
      literary: '文学家',
      philosopher: '哲学家',
      religion: '宗教',
    } as Record<string, string>,
    works: '代表作品',
    backToList: '返回图鉴',
    searchPlaceholder: '搜索姓名…',
    empty: '未找到匹配的人物',
    langLabel: 'EN',
    footer: '人物图鉴 · 静态收录',
    poemAttribution: '泰戈尔 ·《吉檀迦利》',
    poemLines: [
      '你已使我绵延无尽，这样做是你的快乐。这易碎的陶杯，你一次次倒空，又不断充以新的生命。',
      '这小小的芦笛，你携带着它翻越山谷，用它吹奏常新的音乐。',
      '在你双手神圣的爱抚下，我小小的心迷失在无边的喜悦中，发出难以言表的词调。',
      '你无穷的赐予只注入我小小的手。时代过去了，你还在倾注，而我的手还有空处可供充满。',
    ],
  },
  en: {
    brand: 'Revelation',
    tagline: 'Writers, philosophers, and thinkers across history',
    cta: 'Enter the gallery',
    figures: 'Gallery',
    home: 'Home',
    all: 'All',
    categories: {
      literary: 'Literary',
      philosopher: 'Philosopher',
      religion: 'Religion',
    } as Record<string, string>,
    works: 'Notable works',
    backToList: 'Back to gallery',
    searchPlaceholder: 'Search by name…',
    empty: 'No matching figures found',
    langLabel: '中文',
    footer: 'Figure gallery · static archive',
    poemAttribution: 'Tagore · Gitanjali',
    poemLines: [
      'Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.',
      'This little flute of a reed thou hast carried over hills and dales, and hast breathed through it melodies eternally new.',
      'At the immortal touch of thy hands my little heart loses its limits in joy and gives birth to utterance ineffable.',
      'Thy infinite gifts come to me only on these very small hands of mine. Ages pass, and still thou pourest, and still there is room to fill.',
    ],
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function switchLocalePath(path: string, from: Locale, to: Locale): string {
  const segments = path.split('/').filter(Boolean);
  const localeIndex = segments.findIndex((s) => s === from);
  if (localeIndex === -1) return `/${to}/`;
  segments[localeIndex] = to;
  return '/' + segments.join('/') + (path.endsWith('/') ? '/' : '');
}
