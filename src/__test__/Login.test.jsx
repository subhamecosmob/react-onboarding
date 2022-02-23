import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "../Login";
import { LoginProvider } from "../contexts/loginContext";

const MockLoginComponent = ({ username = "", password = "" }) => {
	return (
		<LoginProvider>
			<BrowserRouter>
				<Login username={username} password={password} />
			</BrowserRouter>
		</LoginProvider>
	);
};

test("check header is being rendered", () => {
	render(<MockLoginComponent />);
	const headingElement = screen.getByText(/type anything to login/i);
	expect(headingElement).toBeInTheDocument();
});

test("check header does not exist", () => {
	render(<MockLoginComponent />);
	const headingElement = screen.queryByText(/type anything to logain/i);
	expect(headingElement).not.toBeInTheDocument();
});

test("check button is disabled at initial page", () => {
	render(<MockLoginComponent />);
	const button = screen.getByRole("button", /login/i);
	expect(button).toBeDisabled();
});

test("check password input is being rendered", () => {
	render(<MockLoginComponent />);
	const passwordInput = screen.getByTestId("password-input");
	expect(passwordInput).toBeInTheDocument();
});

test("check correct number of button fields", () => {
	render(<MockLoginComponent />);
	const inputFields = screen.getAllByRole("button");
	expect(inputFields.length).toBe(1);
});

test("button should be enabled after input has value", () => {
	render(<MockLoginComponent username='asdasd' password='asasd' />);

	const button = screen.getByRole("button", /login/i);
	expect(button).toBeEnabled();
});
