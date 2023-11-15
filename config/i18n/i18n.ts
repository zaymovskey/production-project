import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

/* eslint-disable import/no-internal-modules */
import translationEN from '../../public/locales/en.json';
import translationRU from '../../public/locales/ru.json';
/* eslint-enable import/no-internal-modules */

console.log(translationEN);

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU }
};

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    debug: _IS_DEV_,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
