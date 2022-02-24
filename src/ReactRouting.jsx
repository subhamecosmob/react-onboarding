import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./contexts/loginContext";
import "./style.css";

const ReactRouting = () => {
	let { isLogin, setIslogin } = useContext(LoginContext);
	let navigate = useNavigate();

	return (
		<nav className='navbar'>
			<Link to='/'>home</Link>
			<Link to='list'>List</Link>
			<Link to='httprequest'>Httprequest</Link>
			<Link to='classcomponent'>Classcomponent</Link>
			<Link to='conditionalrendering'>ConditionalRendering</Link>
			<Link to='form'>Form</Link>
			<Link to='Portals'>Portals</Link>
			<Link to='Fragments'>Fragments</Link>
			<Link to='Ref'>Ref</Link>
			<Link to='ReactMemo'>React-Memo</Link>
			<Link to='Animation'>Animation</Link>
			{isLogin ? (
				<Link
					to='Login'
					onClick={() => {
						setIslogin(false);
						navigate("Login");
					}}>
					Logout
				</Link>
			) : (
				<Link to='Login'>Login</Link>
			)}
			{/* <a href='#'>
				<FormControlLabel
					control={
						<MaterialUISwitch
							size='small'
							checked={isDarkMode ? true : false}
							onChange={() => setDarkMode((state) => !state)}
						/>
					}
					label=''
				/>
			</a> */}
		</nav>
	);
};

export default ReactRouting;
