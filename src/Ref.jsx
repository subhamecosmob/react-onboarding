import React, { useRef } from "react";
import "./style.css";

const Ref = () => {
	const inputRef = useRef();

	const focus = () => {
		inputRef.current.focus();
	};
	return (
		<div>
			<input
				ref={inputRef}
				className='input'
				type='text'
				value='i am about to be focused'
			/>
			<button onClick={focus}>focus</button>
		</div>
	);
};

export default Ref;
