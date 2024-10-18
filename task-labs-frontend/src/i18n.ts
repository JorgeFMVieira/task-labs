import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: require('./config/Locales/en.json'),
      },
      es: {
        translation: require('./config/Locales/es.json'),
      },
      fr: {
        translation: require('./config/Locales/fr.json'),
      },
      pt: {
        translation: require('./config/Locales/pt.json'),
      },
      de: {
        translation: require('./config/Locales/de.json'),
      },
      it: {
        translation: require('./config/Locales/it.json'),
      },
      ru: {
        translation: require('./config/Locales/ru.json'),
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;