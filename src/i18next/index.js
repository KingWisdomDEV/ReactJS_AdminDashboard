import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { LOCALES } from '../constants';
import en from './resources/en/translation.json';
import vi from './resources/vi/translation.json';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  // .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      [LOCALES.ENGLISH]: {
        translation: en,
      },
      [LOCALES.VIETNAM]: {
        translation: vi,
      },
    },
    fallbackLng: LOCALES.ENGLISH,

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;

export const translate = (key, values) => i18n.t(key, values);
