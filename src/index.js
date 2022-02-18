import ReactDOM from "react-dom";

import React, { useState } from "react";
import List from "./List";
import Conditionalrendering from "./Conditionalrendering";
import Style from "./Style";
import HttpRequest from "./HttpRequest";
import CustomHook from "./CustomHook";
import Form from "./Form";
import ClassComponent from "./ClassComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactRouting from "./ReactRouting";
import Portals from "./Portals";

export const Reactcomponent = () => {
	const [input, setInput] = useState("");

	return <input value={input} onChange={(e) => setInput(e.target.value)} />;
};

ReactDOM.render(
	<BrowserRouter>
		<ReactRouting />
		<Routes>
			<Route path='/' element={<Style />} />
			<Route path='conditionalrendering' element={<Conditionalrendering />} />
			<Route path='list' element={<List />} />
			<Route path='httprequest' element={<HttpRequest />} />
			<Route path='classcomponent' element={<ClassComponent />} />
			<Route path='form' element={<Form />} />
			<Route path='Portals' element={<Portals />} />
		</Routes>
	</BrowserRouter>,
	document.querySelector("#root")
);
