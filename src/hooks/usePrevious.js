import {useEffect, useRef, useDebugValue} from "react";
//useEffect: let's us update our state or remember our state whenever our state changes
//useRef: allows us to remember the previous state

function usePrevious(value) {
	const ref = useRef(null);
	useEffect(() => {
		ref.current = value;
	},[value]);

	useDebugValue(ref.current > 18 ? "too much" : "too little");

	// Return previous value (happens before update in useEffect above)
	// which is why it returns null the first time because useEffect() did not run
	return ref.current;
}

export default usePrevious;