//@flow

import React from "react";
import "./../App.scss";

import MyComp from "../components/MyCompTwo";

function AppFlow() {
  function onClickHandle() {
    console.log("I am clicked");
  }

  return (
    <div className="App">
      <header className="App-header">
        <MyComp
          onClick={onClickHandle}
          str="hello"
          obj={{ name: "john" }}
        >
				</MyComp>
      </header>
    </div>
  );
}

export default AppFlow;
