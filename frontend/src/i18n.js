// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
// import deTranslation from './locales/de/translation.json';
import ruTranslation from './locales/ru/translation.json';

// Get the stored language from local storage or default to 'en'
const storedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      // de: { translation: deTranslation },
      ru: { translation: ruTranslation }
    },
    lng: storedLanguage, // Use the stored language or default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
