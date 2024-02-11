import 'server-only'
import type { Locale } from '@/i18n';
 
const dictionaries: any = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  tr: () => import('../dictionaries/tr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => dictionaries[locale]()