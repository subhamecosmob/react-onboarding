import { useState } from "react";

export default (value) => {
	let [inputValue, setInputValue] = useState(value);

	const handleInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const resetInputValue = () => {
		setInputValue("");
	};

	return [inputValue, handleInputValue, resetInputValue];
};
