import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "./../../actions/balanceActions";

function DepositePage() {
  const balance = useSelector(state => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const loading = useSelector(state => state.balanceReducer.loading);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch(balanceActions.depositAsync());
    //using ReduxThunk to access "dispatch" object in action file

    // dispatch({
    // 	type: "DEPOSIT",
    // 	payload: 10
    // })
  }

  return (
    <div>
      {loading ? <h1>loading...</h1> : <h1>Balance: {balance}</h1>}
      <button onClick={onDepositHandle}>Deposit</button>
      <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
    </div>
  );
}

export default DepositePage;
