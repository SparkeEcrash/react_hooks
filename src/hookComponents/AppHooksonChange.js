import React, {useState} from "react";
import "./../App.scss";

function AppHooksChange() {
	const [name, setName] = useState("default");
	const [income, setIncome] = useState("high");

	function handleNameChange(e){
		setName(e.target.value);
	}

	function handleSelectIncomeChange(e){
		setIncome(e.target.value);
	}

	function onSubmitHandle(e){
		e.preventDefault();
		console.log('state =', name, income);
	}

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={onSubmitHandle}>
					<div>
						<span>Name: </span>
						<input value={name} type="text" onChange={handleNameChange}/>
					</div>
					<div>
						<span>Income: </span>
						<select value={income} onChange={handleSelectIncomeChange}>
							<option value="High">High</option>
							<option value="Mid">Mid</option>
							<option value="Low">Low</option>
						</select>
						<input type="submit" value="submit"/>
					</div>
				</form>
			</header>
		</div>
	)
}

export default AppHooksChange;