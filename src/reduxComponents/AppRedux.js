import React from "react";
import "./../App.scss";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import HomePage from "./../pages/redux/homePage";
import DepositPage from "./../pages/redux/depositPage";
import WithdrawPage from "./../pages/redux/withdrawPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink to="/" className="App-link">
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/deposit" className="App-link">
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/withdraw" className="App-link">
                Withdraw
              </NavLink>
            </li>
          </ul>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/deposit" exact component={DepositPage}></Route>
          <Route path="/withdraw" exact component={WithdrawPage}></Route>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
