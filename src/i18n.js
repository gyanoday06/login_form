import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./locales/english/translation.json"
import Hindi from "./locales/hindi/translation.json"

i18next
  .use(initReactI18next)
  
  .init({
    resources: {
      english: {
        translation: English
      },
      hindi: {
        translation: Hindi
      },
    },

    lng : 'english',

    fallbackLng: "english",
    
    interpolation : {
        escapeValue: false
    },
  });


export default i18next