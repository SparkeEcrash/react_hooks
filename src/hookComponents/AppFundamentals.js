import React, {useState} from "react";
import "./../App.scss";
import NameTag from "../components/nameTag";
import Input from "../components/Input";

const makeGreen = BaseComponent => props => {

	const addGreen = {
		style: {
			color: "green"
		}
	}

	const newProps = {
		...props, ...addGreen
	}

	return <BaseComponent {...newProps}/>
}

const removeInline = BaseComponent => props => {
	const newProps = {...props};
	delete newProps.style;
	return <BaseComponent {...newProps}/>
}

const GreenNameTag = makeGreen(NameTag);
const CleanNameTag = removeInline(NameTag);

const nameStyle = {
  color: "gray",
  border: "1px solid gray",
  paddingTop: "5px",
  paddingBottom: "5px",
  width: "300px"
};

const nameTagTitle = {
	color: "yellow",
	borderColor: "yellow",
	borderStyle: "dotted"
}

const initialNames = [
	{firstName: "john",lastName: "johnson"},
	{firstName: "peter",lastName: "peterson"},
	{firstName: "jill",lastName: "jillson"},
]

function App() {
	const [names, setNames] = useState(initialNames);
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{...nameStyle,...nameTagTitle}}>Names List</h1>
        <GreenNameTag style={nameStyle}>Jill</GreenNameTag>
        <CleanNameTag style={nameStyle} firstName={names[0].firstName} lastName={names[0].lastName}></CleanNameTag>
        <NameTag style={nameStyle} firstName="Jack"></NameTag>
				<Input placeholder="enter here" type="text"></Input>
				{names.map( (v,i) => {
					return <NameTag key={`${i}${v.firstName}${v.lastName}`} style={nameStyle} firstName={v.firstName}></NameTag>
				})}
      </header>
    </div>
  );
}

export default App;
