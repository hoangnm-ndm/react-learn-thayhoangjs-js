import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();
	return (
		<button className="btn btn-primary" onClick={toggleTheme}>
			{t(theme === "light" ? "navbar.darkMode" : "navbar.lightMode")}
		</button>
	);
};

export default ThemeToggle;
