import { LangTypes } from '@/types/lang';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  'zh-tw': () => import('./dictionaries/zh-TW.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
};

export const getDictionary = async (locale: LangTypes) => dictionaries[locale]();
