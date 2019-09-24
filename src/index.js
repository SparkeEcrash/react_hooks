import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import balanceReducer from "./store/balanceReducer";
import loanReducer from "./store/loanReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";

import "./index.css";

import AppFundamentals from "./hookComponents/AppFundamentals";
import AppHooks from "./hookComponents/AppHooks";
import AppHooksEvents from "./hookComponents/AppHooksEvents";
import AppHooksOnChange from "./hookComponents/AppHooksonChange";
import AppRefs from "./hookComponents/AppRefs";
import AppForwardingRefs from "./hookComponents/AppForwardingRefs";
import AppUseEffect from "./hookComponents/AppUseEffect";
import AppUseEffectExample from "./hookComponents/AppUseEffectExample";
import AppUseEffectAsync from "./hookComponents/AppUseEffectAsync";
import AppUseMemo from "./hookComponents/AppUseMemo";
import AppUsePrevious from "./hookComponents/AppUsePrevious";
import AppUseLayout from "./hookComponents/AppUseLayout";
import AppUseCustomFetch from "./hookComponents/AppUseCustomFetch";
import AppRouter from "./hookComponents/AppRouter";

import AppRedux from "./reduxComponents/AppRedux";
import AppUseReducer from "./reduxComponents/AppUseReducer";
import AppMobx from "./reduxComponents/AppMobx";

import AppTicTacToe from "./projectComponents/AppTicTacToe";
import AppDraggableList from "./projectComponents/AppDraggableList";

import AppComponentLibrary from "./AppComponentLibary";

import AppPropTypes from "./typeComponents/AppPropTypes";
import AppFlow from "./typeComponents/AppFlow";

import AppTest from "./testComponents/AppTest";

import * as serviceWorker from "./serviceWorker";

const store = createStore(combineReducers({
	balanceReducer,
	loanReducer
}), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppFlow />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
