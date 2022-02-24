import { Box, Container, Stack } from "@mui/material";
import { useContext, useState } from "react";

import { ThemeContext } from "./contexts/themeContext";
import { customTheme } from "./contexts/themeContext";

const Colors = ({ color }) => {
	let { changeTheme } = useContext(ThemeContext);

	const onClick = (e) => {
		changeTheme(color);
	};

	return (
		<>
			<Box
				sx={{
					width: 60,
					height: 60,
					borderRadius: "20rem",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontSize: ".8rem",
					backgroundColor: customTheme[color].palette.background.paper,
					"&:hover": {
						cursor: "pointer",
					},
				}}
				onClick={onClick}>
				{color}
			</Box>
		</>
	);
};

const ColorPicker = () => {
	return Object.keys(customTheme).map((color, index) => (
		<Colors color={color} key={index} />
	));
};
const ThemeChanger = () => {
	return (
		<Container
			sx={{
				bgcolor: "background.default",
				color: "text.primary",
				padding: "1rem",
				marginTop: "1rem",
				borderRadius: "4px",
				width: "25%",
			}}>
			<Stack direction={"row"} justifyContent='space-around'>
				<ColorPicker />
			</Stack>
		</Container>
	);
};

export default ThemeChanger;
