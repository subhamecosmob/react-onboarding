import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
	let [isLogin, setIslogin] = useState(false);

	return (
		<LoginContext.Provider value={{ isLogin, setIslogin }}>
			{props.children}
		</LoginContext.Provider>
	);
};
