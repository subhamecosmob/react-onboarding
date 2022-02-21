import ReactDOM from "react-dom";

import React, { Fragment, useState } from "react";
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
import Fragments from "./Fragments";
import Ref from "./Ref";
import ReactMemo from "./performance/ReactMemo";
import UseMemo from "./performance/UseMemo";
import Login from "./Login";
import ReactUseCallBack from "./performance/UseCallBack";
import SecuredRoutes from "./SecuredRoutes";
import { LoginProvider } from "./contexts/loginContext";

export const Reactcomponent = () => {
	const [input, setInput] = useState("");

	return <input value={input} onChange={(e) => setInput(e.target.value)} />;
};

ReactDOM.render(
	<BrowserRouter>
		<LoginProvider>
			<ReactRouting />

			<Routes>
				<Route path='Login' element={<Login />} />
				<Route element={<SecuredRoutes />}>
					<Route path='/' element={<Style />} />
					<Route path='list' element={<List />} />
					<Route path='httprequest' element={<HttpRequest />} />
					<Route path='classcomponent' element={<ClassComponent />} />
					<Route
						path='conditionalrendering'
						element={<Conditionalrendering />}
					/>
					<Route path='form' element={<Form />} />
					<Route path='Portals' element={<Portals />} />
					<Route path='Fragments' element={<Fragments />} />
					<Route path='Ref' element={<Ref />} />
					<Route path='ReactMemo' element={<ReactUseCallBack />} />
				</Route>
			</Routes>
		</LoginProvider>
	</BrowserRouter>,
	document.querySelector("#root")
);
