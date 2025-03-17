/** @format */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Import the language detector

import labelsEN from "./locales/en/translation.json";

import labelsFR from "./locales/fr/translation.json";
import labelsAR from "./locales/ar/translation.json";

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: labelsEN,
      },
      fr: {
        translation: labelsFR,
      },
      ar: {
        translation: labelsAR,
      },
    },
    lng: "fr", // Default language
    fallbackLng: "fr", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values by default
    },
    detection: {
      order: [
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
        "cookie",
      ], // Order of detection
      caches: ["localStorage"], // Cache language in localStorage
      lookupLocalStorage: "i18nextLng", // Key used in localStorage
    },
  });

export default i18n;
