import React from 'react';
import { render } from 'react-dom';
import './styles.css';

import Counter from './components/Counter';

render(	
	<div>
		<Counter delta={1} />
		<Counter delta={2} />
		<Counter delta={3} />
	</div>,
	document.getElementById('react-container')
)
