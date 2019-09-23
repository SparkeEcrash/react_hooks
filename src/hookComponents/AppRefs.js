import React, { useEffect, useRef } from "react";
import "./../App.scss";

function AppRefs() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  //places focus on name input when page loads

  function keyPressHandle(e) {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      //when enter is pressed on the name input field... change the focus to the age input
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  }

  function onClickHandle() {
    alert("submitted");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRefs Hook</h3>
        <div className="form-field">
          <span>Name</span>
          <input
            ref={nameRef}
            type="text"
            id="nameInput"
            onKeyDown={keyPressHandle}
          />
        </div>
        <div className="form-field">
          <span>age</span>
          <input
            ref={ageRef}
            type="text"
            id="ageInput"
            onKeyDown={keyPressHandle}
          />
        </div>
        <div className="form-field">
          <span>Married</span>
          <input
            ref={marriedRef}
            type="checkbox"
            id="marriedInput"
            onKeyDown={keyPressHandle}
          />
        </div>
        <button onClick={onClickHandle} ref={submitRef}>
          Submit
        </button>
      </header>
    </div>
  );
}

export default AppRefs;
