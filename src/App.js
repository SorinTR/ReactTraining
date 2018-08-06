import React, { Component } from 'react'
import './App.css';
import ColorButtons from './components/ColorButtons';
import Footer from './components/Footer";
class App extends Component {
	render() {
		return (
			<div className="App">
				<ColorButtons />
				<Footer />
			</div>
		);
	}
}

export default App;
