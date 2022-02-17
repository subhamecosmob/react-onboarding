import ReactDOM from "react-dom";

import React, { useState } from "react";
import List from "./List";
import Conditionalrendering from "./Conditionalrendering";
import Style from "./Style";
import HttpRequest from "./HttpRequest";

export const Reactcomponent = () => {
	const [input, setInput] = useState("");

	return <input value={input} onChange={(e) => setInput(e.target.value)} />;
};

ReactDOM.render(<HttpRequest />, document.querySelector("#root"));
