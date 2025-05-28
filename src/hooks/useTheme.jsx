import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("context theme load failed!");
	}
	return context;
};
