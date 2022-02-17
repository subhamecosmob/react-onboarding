import React from "react";
import todos from "./data.json";

class ClassComponent extends React.Component {
	createList = () => {
		return todos.map((todo) => {
			return <h1 key={todo.userId + todo.title}>{todo.title}</h1>;
		});
	};

	componentDidMount = () => {
		// run when component get mounted first/
		// this is where you safely make an remote http request
	};

	componentDidUpdate = () => {
		// this is invoked immediately after updating occurs. This method is not called for the initial render.
	};

	componentWillUnmount = () => {
		// this is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method,
	};

	render() {
		return this.createList();
	}
}

export default ClassComponent;
