import React from "react";
import "./App.scss";
import Button from "./componentLibrary/Button/Button";

function AppComponentLibrary() {
	return (
		<div className="App">
			<header className="App-header">
				<Button type="primary">Click Me</Button>
				<Button type="disabled">Click Me</Button>
			</header>
		</div>
	);
}

export default AppComponentLibrary;