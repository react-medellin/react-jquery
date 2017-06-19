'use strict';

const { createElement } = React;
const { render } = ReactDOM;

// Define Button element with (types, props, children)
const Button = createElement(
	'a',
	{
		className: 'btn btn-default',
		onClick: () => { handlerClick('REACT') },
	},
	'REACT Button'
);

render(
	Button,
	document.getElementById('react-container')
)
