import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt
} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import { useState } from "react";
import messageContext from "../contexts/messageContext";

import "./../App.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(null);
  const [message, setMessage] = useState("I am being shared");

  function onClickHandle() {
    setLoggedIn(!loggedIn);
  }

  function onChangeHandle(e) {
    setAge(e.target.value);
  }

  return (
    <BrowserRouter>
      <messageContext.Provider value={[message, setMessage]}>
        <div className="App">
          <header className="App-header">
            <ul className="ul-style">
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/"
                  exact
                  activeStyle={{ color: "royalblue" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/about"
                  exact
                  activeClassName="Link-active-style"
                >
                  About
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/user/james/park"
                  exact
                  activeStyle={{ color: "orangered" }}
                >
                  User
                </NavLink>
              </li>
            </ul>
            {loggedIn.toString()}
            <Prompt
              when={loggedIn && !age}
              message={location => {
                return location.pathname.startsWith("/user")
                  ? true
                  : "are you sure?";
              }}
            ></Prompt>
            <button onClick={onClickHandle}>
              {loggedIn ? "logout" : "login"}
            </button>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/about" exact component={AboutPage}></Route>
            <Route
              //check if the user is logged in first and if not reroute to "/" home about
              path="/user/:firstname/:lastname"
              exact
              render={({ match }) => {
                //match is a prop passed down from React Router
                return loggedIn ? (
                  <h1>
                    <h2>Age: {age}</h2>
                    <input
                      type="text"
                      value={age}
                      onChange={onChangeHandle}
                    ></input>
                    Welcome {match.params.firstname} {match.params.lastname}
                  </h1>
                ) : (
                  <Redirect to="/"></Redirect>
                );
              }}
            ></Route>
          </header>
        </div>
      </messageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
