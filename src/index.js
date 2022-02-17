import ReactDOM from "react-dom";

import React, { useState } from "react";
import List from "./List";
import Conditionalrendering from "./Conditionalrendering";
import Style from "./Style";
import HttpRequest from "./HttpRequest";
import CustomHook from "./CustomHook";
import Form from "./Form";
import ClassComponent from "./ClassComponent";

export const Reactcomponent = () => {
	const [input, setInput] = useState("");

	return <input value={input} onChange={(e) => setInput(e.target.value)} />;
};

ReactDOM.render(<ClassComponent />, document.querySelector("#root"));
