import { createContext, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { createTheme } from "@mui/material";
export const ThemeContext = createContext();

const dark = createTheme({
	palette: {
		mode: "dark",
	},
});

const light = createTheme({
	palette: {
		mode: "light",
	},
});

export const ThemeContextProvider = (props) => {
	const [isDarkMode, setDarkMode] = useState(true);

	return (
		<ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
			<ThemeProvider theme={isDarkMode ? dark : light}>
				{props.children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
