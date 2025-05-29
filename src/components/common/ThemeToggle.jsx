import React from "react";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<button className="btn btn-primary" onClick={toggleTheme}>
			{theme === "light" ? "Toi" : "Sang"}
		</button>
	);
};

export default ThemeToggle;
