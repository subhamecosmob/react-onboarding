import { useState, memo } from "react";

const ComponentUsingReactMemo = ({ color }) => {
	console.log("rendering using react memo.");
	return (
		<>
			<div style={{ backgroundColor: color, height: 100, width: 100 }}></div>
		</>
	);
};

const MemoizedCompeont = memo(ComponentUsingReactMemo);

const ReactMemo = () => {
	let [renderComponent, setRenderComponent] = useState(0);
	let [color, setColor] = useState("blue");

	console.log("rendering main component");

	return (
		<>
			<div>
				<button onClick={() => setRenderComponent(renderComponent++)}>
					Re-render component : {renderComponent}
				</button>
				<button onClick={() => setColor(color === "blue" ? "green" : "blue")}>
					change color
				</button>
			</div>
			<div>
				<MemoizedCompeont color={color} />
			</div>
		</>
	);
};

export default ReactMemo;
