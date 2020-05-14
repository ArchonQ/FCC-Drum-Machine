import React from 'react';
import Box from './components/box';
import './App.css';

class App extends React.Component {
	state = {
		keys: ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'],
	};
	render() {
		const { keys } = this.state;
		return (
			<div id='drum-machine' className='container'>
				<div id='display' className='display'>
					{keys.map((key, idx) => (
						<Box text={key} key={idx} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
