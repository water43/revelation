export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'zh';

export type PoemSlide = {
  image: string;
  attribution: string;
  lines: string[];
};

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
    poemCarouselLabel: '诗句轮播',
    poemPrev: '上一首',
    poemNext: '下一首',
    poems: [
      {
        image: 'home/gitanjali-1.png',
        attribution: '泰戈尔 ·《吉檀迦利》',
        lines: [
          '你已使我绵延无尽，这样做是你的快乐。这易碎的陶杯，你一次次倒空，又不断充以新的生命。',
          '这小小的芦笛，你携带着它翻越山谷，用它吹奏常新的音乐。',
          '在你双手神圣的爱抚下，我小小的心迷失在无边的喜悦中，发出难以言表的词调。',
          '你无穷的赐予只注入我小小的手。时代过去了，你还在倾注，而我的手还有空处可供充满。',
        ],
      },
      {
        image: 'home/gitanjali-2.png',
        attribution: '泰戈尔 ·《吉檀迦利》',
        lines: [
          '我不知道你怎样歌唱，我的主人！我总在惊诧中静听。',
          '你音乐的光芒照亮了世界。你音乐的生命气息弥漫了诸天。你音乐的圣川冲破一切冷漠的阻碍，向前奔流。',
          '我的心渴望应和你的歌唱，却无奈挣扎不出一点声音。我想说话，但言语迸发不出歌声，我语不成声地叫喊。啊，你已把我的心囚禁在你音乐的漫天大网中，我的主人！',
        ],
      },
      {
        image: 'home/gitanjali-3.png',
        attribution: '泰戈尔 ·《吉檀迦利》',
        lines: [
          '当你命令我歌唱时，我的心似乎要因骄傲而胀裂；我仰望着你的脸，泪水涌上了眼眶。',
          '我生命中所有烦躁和苦痛融化成一片甜美的和谐——我的仰慕像一只快乐的鸟儿，振翅飞越海洋。',
          '我知道你喜悦我的歌唱。我知道只有作为一个歌者，我才能来到你面前。',
          '我用我的歌曲远伸翅膀的末梢触及你的双脚，那是我从未奢望触及的。',
          '在歌唱的欣喜中陶醉，我忘乎所以，你是我的主人，我却称你为朋友。',
        ],
      },
      {
        image: 'home/donne-1.jpg',
        attribution: '约翰·多恩 ·《神圣十四行诗》',
        lines: [
          '三位一体之神，击打我的心吧；你至今还只是敲打、吹拂、普照，试图修补；',
          '好让我站起，愿你推倒我，弯下你的力量，打碎、吹散、焚烧，使我焕然一新。',
          '我像一座被僭夺的城池，本该属你，苦苦想接纳你，却终无结果。理性，你在我心中的总督，本应保卫我，却成了俘虏，显得软弱或不忠。',
          '然而我深深爱你，也渴望被你所爱，但我已许配给你的仇敌：求你离异我，解开或再次斩断那结，把我囚进你怀——因除非你迷住我，我永不得自由；除非你强夺我，我永不得纯洁。',
        ],
      },
    ] satisfies PoemSlide[],
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
    poemCarouselLabel: 'Poem carousel',
    poemPrev: 'Previous poem',
    poemNext: 'Next poem',
    poems: [
      {
        image: 'home/gitanjali-1.png',
        attribution: 'Tagore · Gitanjali',
        lines: [
          'Thou hast made me endless, such is thy pleasure. This frail vessel thou emptiest again and again, and fillest it ever with fresh life.',
          'This little flute of a reed thou hast carried over hills and dales, and hast breathed through it melodies eternally new.',
          'At the immortal touch of thy hands my little heart loses its limits in joy and gives birth to utterance ineffable.',
          'Thy infinite gifts come to me only on these very small hands of mine. Ages pass, and still thou pourest, and still there is room to fill.',
        ],
      },
      {
        image: 'home/gitanjali-2.png',
        attribution: 'Tagore · Gitanjali',
        lines: [
          'I know not how thou singest, my master! I ever listen in silent amazement.',
          'The light of thy music illumines the world. The life breath of thy music runs from sky to sky. The holy stream of thy music breaks through all stony obstacles and rushes on.',
          'My heart longs to join in thy song, but vainly struggles for a voice. I would speak, but speech breaks not into song, and I cry out baffled. Ah, thou hast made my heart captive in the endless meshes of thy music, my master!',
        ],
      },
      {
        image: 'home/gitanjali-3.png',
        attribution: 'Tagore · Gitanjali',
        lines: [
          'When thou commandest me to sing it seems that my heart would break with pride; and I look to thy face, and tears come to my eyes.',
          'All that is harsh and dissonant in my life melts into one sweet harmony—and my adoration spreads wings like a glad bird on its flight across the sea.',
          'I know thou takest pleasure in my singing. I know that only as a singer I come before thy presence.',
          'I touch by the edge of the far-spreading wing of my song thy feet which I could never aspire to reach.',
          'Drunk with the joy of singing I forget myself and call thee friend who art my lord.',
        ],
      },
      {
        image: 'home/donne-1.jpg',
        attribution: 'John Donne · Holy Sonnets',
        lines: [
          'Batter my heart, three-person’d God; for you as yet but knock, breathe, shine, and seek to mend;',
          'That I may rise, and stand, o’erthrow me, and bend your force, to break, blow, burn, and make me new.',
          'I, like an usurp’d town, to another due, labour to admit you, but Oh, to no end. Reason, your viceroy in me, me should defend, but is captived, and proves weak or untrue.',
          'Yet dearly I love you, and would be loved fain, but am betroth’d unto your enemy: divorce me, untie or break that knot again, take me to you, imprison me, for I, except you enthrall me, never shall be free, nor ever chaste, except you ravish me.',
        ],
      },
    ] satisfies PoemSlide[],
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
