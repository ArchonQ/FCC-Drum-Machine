import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);

		this.audio = React.createRef();
	}

	playSound = () => {
		this.audio.current.play();
	};
	render() {
		const { text, audio } = this.props;
		return (
			<div className='box' onClick={this.playSound}>
				{text}
				<audio ref={this.audio} src={audio} className='clip' id={text} />
			</div>
		);
	}
}

export default Box;
