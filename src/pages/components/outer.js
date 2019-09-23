import React, { useContext } from "react";
import Inner from "./inner";
import messageContext from "./../../contexts/messageContext";

function Outer() {
	return (
		<>
			<h2>Outer: {useContext(messageContext)[0]}</h2>
			{/* //useContext returns an array that is set in the Provider component as value in AppRouter.js*/}
			<Inner></Inner>
		</>
	)
}

export default Outer;