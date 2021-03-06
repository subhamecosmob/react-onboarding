import { Button, FormControl } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./contexts/loginContext";

const Login = ({ username = "", password = "" }) => {
	const { setIslogin } = useContext(LoginContext);
	const [formDetails, setFormDetails] = useState({
		username: username,
		password: password,
	});

	let navigate = useNavigate();
	const onSubmit = (e) => {
		e.preventDefault();
		if (formDetails.password && formDetails.username) {
			// submit details using fetcg to server and get token if available;

			setIslogin(true);
			navigate("/");
		}
	};
	return (
		<form onSubmit={onSubmit}>
			<div className='ui container center'>
				<h1 className='ui'>type anything to login</h1>
				<div className='ui fluid labeled input'>
					<div className='ui label'>username</div>
					<input
						value={formDetails.username}
						onChange={(e) =>
							setFormDetails((state) => {
								return { ...state, username: e.target.value };
							})
						}
						type='text'
						placeholder='username'
						data-testid='username-input'
					/>
				</div>
				<br></br>
				<div className='ui fluid labeled input'>
					<div className='ui label'>password</div>
					<input
						value={formDetails.password}
						onChange={(e) =>
							setFormDetails((state) => {
								return { ...state, password: e.target.value };
							})
						}
						type='password'
						placeholder='password'
						data-testid='password-input'
					/>
				</div>
				<br></br>
				<div className='ui fluid labeled input'>
					<Button
						type='submit'
						disabled={!(formDetails.username && formDetails.password)}
						name='login'
						disabl
						color='primary'
						variant='contained'>
						Login
					</Button>
				</div>
			</div>
		</form>
	);
};

export default Login;
