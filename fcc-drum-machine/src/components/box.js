import React from 'react';

class Box extends React.Component {
	render() {
		return <div className='box'>{this.props.text}</div>;
	}
}

export default Box;
