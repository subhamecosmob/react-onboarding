import { useState } from "react";
import "./style.css";

const ShowSlider = ({ increment }) => {
	return (
		<>
			<div className='slide' key={increment}>
				Slide {increment}
			</div>
		</>
	);
};

const Animation = () => {
	let [slide, changeSlide] = useState(0);

	return (
		<div className='ui center aligned grid'>
			<div className='eight wide column height'>
				<div className='ui segment customheight'>
					<ShowSlider color='red' increment={slide} />
				</div>
				<button
					className='positive ui button'
					onClick={() => changeSlide(++slide)}>
					Swipe ->
				</button>
			</div>
		</div>
	);
};

export default Animation;
