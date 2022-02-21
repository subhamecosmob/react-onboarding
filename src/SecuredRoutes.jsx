import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { LoginContext } from "./contexts/loginContext";

const SecuredRoutes = () => {
	const { isLogin } = useContext(LoginContext);

	return isLogin ? <Outlet /> : <Navigate to='/Login' />;
};

export default SecuredRoutes;
