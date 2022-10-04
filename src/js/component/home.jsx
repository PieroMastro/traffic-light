import React, { useState } from "react";
import reactDom from "react-dom";

//create your first component
const Home = () => {

	const [color, setColor] = useState("")

	return (
		<div className="trafficlight">
			<div
				className={color === "red" ? "red on" : "red"}
				onClick={() => setColor("red")}>
			</div>
			<div
				className={color === "yellow" ? "yellow on" : "yellow"}
				onClick={() => setColor("yellow")}>
			</div>
			<div
				className={color === "green" ? "green on" : "green"}
				onClick={() => setColor("green")}>
			</div>
		</div>
	);
};

export default Home;
