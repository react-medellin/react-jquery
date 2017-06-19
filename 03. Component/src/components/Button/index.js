import React from 'react';

const Button = ({ onClick }) => {
	return (
		<a className="btn btn-default" onClick={()=>{onClick()}}>
			Button
		</a>
	);
};

export default Button;
