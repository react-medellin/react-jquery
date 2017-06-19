'use strict';

const { render } = ReactDOM;

render(
	<a className='btn btn-default' onClick={ ()=>{handlerClick('JSX')} } >JSX Button</a>,
	document.getElementById('jsx-container')
)
