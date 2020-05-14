import React from 'react';
import Box from './components/box';
import './App.css';

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

const App = () => (
	<div id='drum-machine' className='container'>
		<div id='display' className='display'>
			{keys.map((key, idx) => (
				<Box text={key} key={idx} />
			))}
		</div>
	</div>
);

export default App;
