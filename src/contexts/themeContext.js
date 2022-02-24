import { createContext, useState } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { createTheme } from "@mui/material";

export const ThemeContext = createContext();

export const customTheme = {
	ocean: createTheme({
		palette: {
			mode: "dark",
			background: {
				paper: "#00747C",
				default: "#fff",
			},
			text: {
				primary: "#ffffff",
				secondary: "#46505A",
			},
			common: {
				black: "#000000",
			},
			primary: {
				main: "#FF8B42",
				contrastText: "#fff",
			},
		},
	}),
	nightly: createTheme({
		palette: {
			mode: "dark",
			background: {
				paper: "#0A1929",
				default: "#fff",
			},
			text: {
				primary: "#ffffff",
				secondary: "#46505A",
			},
			common: {
				black: "#000000",
			},
			primary: {
				main: "#FE8A7F",
				contrastText: "#fff",
			},
		},
	}),
	matepink: createTheme({
		palette: {
			mode: "dark",
			background: {
				paper: "#BC93B6",
				default: "#fff",
			},
			text: {
				primary: "#ffffff",
				secondary: "#46505A",
			},
			common: {
				black: "#000000",
			},
			primary: {
				main: "#008B8C",
			},
		},
	}),
	gold: createTheme({
		palette: {
			mode: "dark",
			background: {
				paper: "#DEA01E",
				default: "#fff",
			},
			text: {
				primary: "#ffffff",
				secondary: "#46505A",
			},
			common: {
				black: "#000000",
			},
			primary: {
				main: "#005248",
				contrastText: "#fff",
			},
		},
	}),
	nature: createTheme({
		palette: {
			mode: "dark",
			background: {
				paper: "#3C9152",
				default: "#fff",
			},
			text: {
				primary: "#ffffff",
				secondary: "#46505A",
			},
			common: {
				black: "#000000",
			},
			primary: {
				main: "#FF878E",
				contrastText: "#fff",
			},
		},
	}),
};

export const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState(customTheme.nightly);
	const changeTheme = (theme) => {
		setTheme(customTheme[theme]);
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
