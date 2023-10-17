import Locale from '@/types/Locale';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  uk: () => import('@/dictionaries/uk.json').then(module => module.default),
};

const getDictionary = async (locale: Locale) => dictionaries[locale]();

export default getDictionary;
