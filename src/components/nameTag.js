import React from "react";

const nameTag = ({style, children, firstName, lastName}) => {
	if(!children) {
		return (
			<>
				<h3 style={style}>First Name: {firstName}</h3>
				{ lastName ? 
				<h3 style={style}>Last Name: {lastName}</h3> : null
				}
				{
					(firstName === "John" && <h3 style={{color:'green'}}>VIP</h3>)
				}
			</>
		)
	}
	return (
		[
			<h3 style={style}>{children}</h3>
		]
	)
}

export default nameTag;

