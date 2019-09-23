const initialState = {
  loan: false
};

function loanReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY":
      return { loan: true };
    case "WITHDRAW":
			return { balance: state.balance - action.payload };
    default:
      return state;
  }
}

export default loanReducer;
