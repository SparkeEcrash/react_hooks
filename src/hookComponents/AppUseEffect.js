import React, {useState, useEffect} from "react";
import "./../App.scss";

let born = false;

function AppUseEffect() {
	const [growth, setGrowth] = useState(0);
	const [nirvana, setNirvana] = useState(false);

	useEffect(() => {
		if(born) {
			document.title = "nirvana attained";
		}
	},[nirvana])
	//THIS HAS TO BE ON TOP
	//when nirvana changes and born condition is met... run this function

	useEffect(() => {
		console.log("I am born");
	}, [])
	//this runs when the functional component is first rendered
	//empty array indicates that it runs only once after it is mounted

	useEffect(() => {
			console.log("make mistake and learn")
	});
	// this should run on initial mount and on every update because there is no empty array

	useEffect(() => {
		if(born) {
			console.log("learn some more")
		} else {
			born = true;
		}

		if(growth > 70) {
			setNirvana(true);
		}
		return function cleanup() {
			console.log('cleanup after mistakes');
		}
		//this runs first before "make mistake and learn" and "learn some more"
	});
	// this should not run on initial mount but on every update because there is no empty array

	function growHandle() {
		setGrowth(growth + 10);
	}

	return (
		<div className="App">
			<header className="App-header">
				<h2>Use Effect</h2>
				<h3>growth:{growth}</h3>
				<button onClick={growHandle}>learn and grow</button>
			</header>
		</div>
	)
}

export default AppUseEffect;