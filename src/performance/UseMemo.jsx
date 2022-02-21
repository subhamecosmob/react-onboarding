import { useMemo, useState, memo } from "react";

function ComponentUsingUseMemo({ params }) {
	console.log("rendering using Usememo", params.color);
	return (
		<>
			<div
				style={{
					backgroundColor: params.color,
					height: 100,
					width: 100,
				}}></div>
		</>
	);
}

const MemoizedComPonent = memo(ComponentUsingUseMemo);

const UseMemo = () => {
	let [renderComponent, setRenderComponent] = useState(0);
	let [color] = useState("blue");

	console.log("rendering main component.");

	let params = useMemo(
		() => ({
			color,
		}),
		[color]
	);

	return (
		<>
			<div>
				<button onClick={() => setRenderComponent(renderComponent++)}>
					Re-render component : {renderComponent}
				</button>
			</div>
			<div>
				<MemoizedComPonent params={params} />
			</div>
		</>
	);
};

export default UseMemo;
