import React, { Component } from 'react';

export default class ColorButtons extends Component {
	state = {
		color: [],
		bgColorRed: [],
		bgColorBlue: [],
		bgColorBlack: [],
		text: ''
	};

	onClickRed = () => {
		this.setState({ color: 'red', bgColorRed: 'red' });
	};

	onClickBlue = () => {
		this.setState({ color: 'blue', bgColorBlue: 'blue' });
	};

	onClickBlack = () => {
		this.setState({ color: 'black', bgColorBlack: 'black' });
	};

	render() {
		return (
			<div>
				<button onClick={this.onClickRed} style={{ backgroundColor: this.state.bgColorRed }}>
					Red
				</button>
				<button onClick={this.onClickBlue} style={{ backgroundColor: this.state.bgColorBlue }}>
					Blue
				</button>
				<button onClick={this.onClickBlack} style={{ backgroundColor: this.state.bgColorBlack }}>
					Black
				</button>
				<h1>{this.state.color}</h1>
			</div>
		);
	}
}
