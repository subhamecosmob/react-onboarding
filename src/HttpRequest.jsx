import React, { useEffect, useState } from "react";

const HttpRequest = () => {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos");
		const body = await response.json();

		console.log(body);

		setTodos(body);
	};

	useEffect(() => {
		getTodos();
	}, []);

	const createList = () => {
		return todos.map((todo) => {
			return <h1 key={todo.userId + todo.title}>{todo.title}</h1>;
		});
	};

	return createList();
};

export default HttpRequest;
