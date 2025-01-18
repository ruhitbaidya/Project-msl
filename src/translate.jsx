import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en/translation.json";
import bn from "./translation/bn/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    bn: { translation: bn },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
