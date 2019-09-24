//@flow
import * as React from "react";

type MyCompProps = {
	str: String,
	age?: Number,
	children: React.Node
}
//"?" makes the prop not required

MyComp.defaultProps = {
	name: "john",
	children: <div>default child inserted</div>
}

function MyComp(props:MyCompProps) {
	return <div>{props.children}</div>
}

export default MyComp;