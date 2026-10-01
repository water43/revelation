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
  },
} as const;

export function t(locale: Locale) {
  return ui[locale];
}

export function switchLocalePath(path: string, from: Locale, to: Locale): string {
  const segments = path.split('/').filter(Boolean);
  // path may be like /revelation/zh/figures/ or /zh/figures/
  const localeIndex = segments.findIndex((s) => s === from);
  if (localeIndex === -1) return `/${to}/`;
  segments[localeIndex] = to;
  return '/' + segments.join('/') + (path.endsWith('/') ? '/' : '');
}
