import React from "react";

function Input({ placeholder, style, onKeyDown }, ref) {
  return <input onKeyDown={onKeyDown} ref={ref} type="text" placeholder={placeholder} style={style} />;
}

const ForwardedInput = React.forwardRef(Input)
//React.forwardRef is a higher order component that takes in the ref that was passed down and assigns it to the input

export default ForwardedInput;
