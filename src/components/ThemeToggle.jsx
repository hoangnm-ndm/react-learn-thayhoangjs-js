import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme();
	return <button onClick={toggleTheme}>{theme === "light" ? "Toi" : "Sang"}</button>;
};

export default ThemeToggle;
