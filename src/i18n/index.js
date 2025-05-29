import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import vi from "./locales/vi/translation.json";

i18n
	.use(LanguageDetector) // Phát hiện ngôn ngữ trình duyệt
	.use(initReactI18next) // Kết nối với react
	.init({
		resources: {
			en: { translation: en },
			vi: { translation: vi },
		},
		fallbackLng: "en",
		debug: false,
		interpolation: {
			escapeValue: false, // React đã xử lý XSS
		},
	});

export default i18n;
