import React from "react";
import PropTypes from "prop-types";

function MyComp({str, onClick, obj}) {
	return (
		<div onClick={onClick}>
			{str}
		</div>
	)
}

MyComp.propTypes = {
	str: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	// obj: PropTypes.shape({
	// 	age: PropTypes.number,
	// 	mame: PropTypes.string
	// })
	obj: PropTypes.exact({
		age: PropTypes.number,
		mame: PropTypes.string,
		gender:PropTypes.oneOf(['M','F']),
		birthdate: PropTypes.instanceOf(Date)
	})
}

export default MyComp;