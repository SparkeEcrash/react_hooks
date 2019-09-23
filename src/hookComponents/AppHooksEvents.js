import React, { useState } from "react";
import "./../App.scss";
import Item from "../components/item";
import useList from "../hooks/useList";

const initList = [
  { name: "tomato", calorie: 20 },
  { name: "rice", calorie: 30 },
  { name: "candy", calorie: 100 }
];

export default function App() {
	// const [list, setList] = useState(initList);
	const items = useList(initList);
  const [editable, setEditable] = useState(false);

  const removeUnhealthyHandle = e => {
    const copyList = [...items.list];
    const filteredList = copyList.filter(v => v.calorie <= 50);
    items.setList(filteredList);
  };

  const removeItemHandle = e => {
    // const filteredItems = list.filter(v => v.name !== e.target.name);
		// setList(filteredItems);
		items.removeItem(e.target.name);
  };

  const makeEditableHandle = () => {
    setEditable(true);
	};
	
	const keyPressHandle = (e, index) => {
		if(e.key === "Enter") {
			setEditable(!editable);
			// const copyList = [...items.list];
			// copyList[index].name = e.target.value;
			// setList(copyList);
			items.saveItem(index, e.target.value);
		}
	}

  return (
    <div className="App">
      <header className="App-header">
        <h2>Grocery List</h2>
        {items.list.map((v, k) => {
          return (
            <Item
              key={`${k}${v.name}${v.calorie}`}
              item={v}
              editable={editable}
              remove={removeItemHandle}
              onDoubleClick={makeEditableHandle}
							onKeyPress={keyPressHandle}
							index={k}
            ></Item>
          );
        })}
        <button onClick={removeUnhealthyHandle} className="remove-button">
          Remove Unhealthy
        </button>
      </header>
    </div>
  );
}
