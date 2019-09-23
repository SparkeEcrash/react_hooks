import React, { useRef, useEffect } from "react";
import "./../App.scss";
import Input from "../components/Input2";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  marginBottom: "10px"
};

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastNameKeyDown() {}

  return (
    <div className="App">
      <header className="App-header">
        <Input
          ref={firstNameRef}
          style={inputStyle}
          placeholder="type first name here"
          onKeyDown={firstNameKeyDown}
        ></Input>
        <Input
          ref={lastNameRef}
          style={inputStyle}
          placeholder="type last name here"
          onKeyDown={lastNameKeyDown}
        ></Input>
      </header>
    </div>
  );
}

export default App;
