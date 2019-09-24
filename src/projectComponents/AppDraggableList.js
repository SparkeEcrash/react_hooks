import React, { useState } from "react";
import "./../App.scss";

const initList = [1, 2, 3, 4, 5, 6];

function AppDraggableList() {

	const[list, setList] = useState(initList);
	const[draggedItem, setDraggedItem] = useState(null);

	function onDragStartHandle(e, index) {
		setDraggedItem(list[index]);
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.setData("text/html", e.target.parentNode);
		e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
	}

	function onDragOverHandle(index) {
		const draggedOverItem = list[index];
		if(draggedOverItem === draggedItem) {
			return;
		}

		const items = list.filter(item => item !== draggedItem);
		items.splice(index, 0, draggedItem);
		setList(items);
	}

  return (
    <div className="App">
      <header className="App-header">
				<h3>Drag and Drop Project</h3>
				<ul>
					{
						list.map((item, index) => {
							return (
								<li key={index} onDragOver={() => onDragOverHandle(index)} className="item-list-style">
									<div draggable onDragStart={(e) => onDragStartHandle(e, index)}>{item}</div>
								</li>
							)
						})
					}
				</ul>
			</header>
    </div>
  );
}

export default AppDraggableList;
