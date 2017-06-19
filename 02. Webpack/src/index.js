import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const Button = () => {
	return (
		<a className="btn btn-default">
			Button
		</a>
	);
};

render(	
	<Button />,
	document.getElementById('react-container')
)