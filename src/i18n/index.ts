import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/i18n/locales/en/common.json';
import uk from '@/i18n/locales/uk/common.json';
import pl from '@/i18n/locales/pl/common.json';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      // Ensure missing UA keys are present explicitly
      uk: { common: { ...uk, 'nav.menu': 'Меню' } },
      pl: { common: pl }
    },
    lng: 'uk',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  });

export default i18n;
