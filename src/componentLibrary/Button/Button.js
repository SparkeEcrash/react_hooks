import React from "react";
import "./../../styles/common.scss";
import "./Button.scss";

function Button({children, type, onClick}) {

	let localClass = "primary";
	if(type === "primary") {
		localClass = "primary";
	}

	if(type === "disabled") {
		localClass="disabled";
	}

	const cls = `radius15 bgYellow fontBlack pad8 width100 ${localClass}`.trim();

	return <div className="btnClass">
		<button onClick={onClick} className={cls}>{children}</button>
	</div>
}

export default Button;