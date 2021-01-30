import { AppLang } from 'store/app.redux';

export const getLanguageForStore = (browserLanguage: string): AppLang => {
  const language = (browserLanguage?.substr(0, 2) ?? 'en') as AppLang;
  switch (language) {
    case 'ca':
    case 'es':
      return language;
    case 'en':
    default:
      return 'en';
  }
};
