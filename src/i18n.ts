import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import config from '@/config/index'
import zhCN from '@/locales/zh-CN'
import enUs from '@/locales/en-US'

const resources = {
  'zh-CN': {
    translation: zhCN
  },
  'en-US': {
    translation: enUs
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: config.locale || 'zh-CN', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
