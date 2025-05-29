import React from "react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<div className="form-check form-switch d-flex align-items-center gap-2">
			<input className="form-check-input" type="checkbox" id="themeSwitch" checked={isDark} onChange={toggleTheme} />
			<label className="form-check-label text-body" htmlFor="themeSwitch"></label>
		</div>
	);
};

export default ThemeToggle;
