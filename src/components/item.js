import React from "react";

function item({ item, editable, remove, onKeyPress, index, onDoubleClick }) {
  return (
    <div className="item-style">
      {editable ? (
        <input
          type="text"
          onKeyPress={(e) => onKeyPress(e, index)}
          defaultValue={item.name}
        ></input>
      ) : (
        <h3 onDoubleClick={onDoubleClick}>{item.name}</h3>
      )}
      <h3>{item.calorie}</h3>
      <button name={item.name} onClick={remove}>
        Remove
      </button>
    </div>
  );
}

export default item;
