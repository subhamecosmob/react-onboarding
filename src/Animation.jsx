import { useState } from "react";
import "./style.css";

const ShowSlider1 = ({ color }) => {
	return (
		<>
			<div className='slide' style={{ backgroundColor: color }}>
				Slide 1
			</div>
		</>
	);
};

const ShowSlider2 = ({ color }) => {
	return (
		<>
			<div className='slide' style={{ backgroundColor: color }}>
				Slide 2
			</div>
		</>
	);
};
const Animation = () => {
	let [slide, changeSlide] = useState(true);

	return (
		<div className='ui center aligned grid'>
			<div className='eight wide column height'>
				<div className='ui segment customheight'>
					{slide ? (
						<ShowSlider2 color='#ffe0e09e' />
					) : (
						<ShowSlider1 color='#FEEBD6' />
					)}
				</div>
				<button
					className='positive ui button'
					onClick={() => changeSlide(!slide)}>
					Swipe
				</button>
			</div>
		</div>
	);
};

export default Animation;
