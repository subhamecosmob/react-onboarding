import React from "react";
import ReactDOM from "react-dom";
const Portals = () => {
	return ReactDOM.createPortal(
		<>hi i am a portal</>,
		document.querySelector("#portal")
	);
};

export default Portals;
