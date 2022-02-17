import React from "react";
import inputStateHook from "./hooks/inputStateHook";

const CustomHook = () => {
	const [inputValue, handleInputValue] = inputStateHook("");

	return (
		<div>
			<label htmlFor='customhookinput'>customhookinput</label>
			<input
				id='customhookinput'
				value={inputValue}
				onChange={(e) => handleInputValue(e)}
			/>
		</div>
	);
};

export default CustomHook;
