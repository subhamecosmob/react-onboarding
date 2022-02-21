import { useMemo, useState, memo, useCallback } from "react";

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

const ReactUseCallBack = () => {
	let [renderComponent, setRenderComponent] = useState(0);
	let [color] = useState("blue");

	console.log("rendering main component");

	let params = useMemo(
		() => ({
			color,
		}),
		[color]
	);

	let onClick = useCallback(() => {
		console.log("using use callback.");
	}, []);

	return (
		<>
			<div>
				<button onClick={() => setRenderComponent(renderComponent++)}>
					Re-render component : {renderComponent}
				</button>
			</div>
			<div>
				<MemoizedComPonent params={params} onClick={onClick} />
			</div>
		</>
	);
};

export default ReactUseCallBack;
