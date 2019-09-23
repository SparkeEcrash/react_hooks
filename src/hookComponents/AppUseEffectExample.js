import React, {useState, useEffect} from "react";
import "./../App.scss";

const initXY = {
	x: null,
	y: null
}

function AppUseEffectExample() {
	const [time, setTime] = useState(Date);
	const [xy, setXY] = useState(initXY);

	useEffect(() => {
		let handle = setInterval(() => {
			setTime(Date)
		}, 1000);
		//need to remove handle after attaching a new one
		return () => {
			clearInterval(handle);
		}
	})

	function mouseMoveHandle(e) {
		setXY({
			x:e.clientX,
			y:e.clientY
		})
	}

	useEffect(() => {
		window.addEventListener("mousemove", mouseMoveHandle)
	},[])
	//you need to attach this event listener only once after it first renders

	//ALTERNATE METHOD BELOW

	// useEffect(() => {
	// 	window.addEventListener("mousemove", mouseMoveHandle)
	// 	return () => {
	// 		window.removeEventListener("mousemove", mouseMoveHandle);
	// 	}
	// })

	return (
		<div className="App">
			<header className="App-header">
				<h2>Use Effect Examples</h2>
				<h3>Date & Time : {time}</h3>
				<h3>{`x:${xy.x}, y:${xy.y}`}</h3>
			</header>
		</div>
	)

}

export default AppUseEffectExample;