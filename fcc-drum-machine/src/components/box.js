import React from 'react';

class Box extends React.Component {
	constructor(props) {
		super(props);

		this.audio = React.createRef();
	}
	componentDidMount() {
		this.audio.current.addEventListener('ended', () => {
			const parent = this.audio.current.parentNode;
			parent.classList.remove('active');
		});
	}

	playSound = () => {
		this.audio.current.play();
		const parent = this.audio.current.parentNode;
		parent.classList.add('active');
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
