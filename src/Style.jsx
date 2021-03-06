/** @format */

import data from "./data.json";
import "./style.css";

const styledBox = (todo) => {
	return (
		<div key={todo.id} className='todo_holder'>
			<h1>{todo.title}</h1>
		</div>
	);
};

const renderList = () => {
	return data.map((todo) => {
		if (todo.completed) return styledBox(todo, "green");
		return styledBox(todo, "red");
	});
};

const Style = () => {
	return <div className='main-container'>{renderList()}</div>;
};

export default Style;
