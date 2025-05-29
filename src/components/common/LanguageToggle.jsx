import React from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	const currentLang = i18n.language;

	const getLangLabel = (lang) => {
		switch (lang) {
			case "en":
				return "🇬🇧 English";
			case "vi":
				return "🇻🇳 Tiếng Việt";
			default:
				return "🌐 Language";
		}
	};

	return (
		<div className="ms-auto d-flex align-items-center">
			<div className="dropdown">
				<button
					className="btn btn-outline-dark btn-sm dropdown-toggle"
					type="button"
					id="languageDropdown"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					{getLangLabel(currentLang)}
				</button>
				<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
					<li>
						<button className="dropdown-item" onClick={() => changeLanguage("en")}>
							🇬🇧 English
						</button>
					</li>
					<li>
						<button className="dropdown-item" onClick={() => changeLanguage("vi")}>
							🇻🇳 Tiếng Việt
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default LanguageToggle;
