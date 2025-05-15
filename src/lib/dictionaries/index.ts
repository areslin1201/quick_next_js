import 'server-only';
import { LangTypes } from '@/types/lang';

const index = {
  en: () => import('./data/en.json').then((module) => module.default),
  'zh-tw': () => import('./data/zh-TW.json').then((module) => module.default),
  ja: () => import('./data/ja.json').then((module) => module.default),
};

export const getDictionary = async (locale: LangTypes) => index[locale]();
