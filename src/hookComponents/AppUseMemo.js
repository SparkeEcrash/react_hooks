import React, {useState, useMemo} from "react";
import "./../App.scss";
import Child from "../components/child";

function App() {
	const [i, setI] = useState(0);

	function onClickHandle() {
		setI(i + 1);
	}

	const memoChild = useMemo(()=> {
		return <Child></Child>
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h3>User Memo</h3>
				<h2>i: {i}</h2>
				<button onClick={onClickHandle}>Increment I</button>
				<h3>normal render</h3>
				<Child></Child>
				{/* everytime the component updates the render count goes up  */}
				<h3>Memo render</h3>
				{memoChild}
				{/* memoChild does not re-render because there is an empty array (within useMemo()) making it render only once when the component first loads  */}
			</header>
		</div>
	);
}

export default App;