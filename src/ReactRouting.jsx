import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ReactRouting = () => {
	return (
		<nav className='navbar'>
			<Link to='/'>home</Link>
			<Link to='list'>List</Link>
			<Link to='httprequest'>Httprequest</Link>
			<Link to='classcomponent'>Classcomponent</Link>
			<Link to='conditionalrendering'>ConditionalRendering</Link>
			<Link to='form'>Form</Link>
			<Link to='Portals'>Portals</Link>
			<Link to='Fragments'>Fragments</Link>
		</nav>
	);
};

export default ReactRouting;
