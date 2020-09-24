import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Components/HomePage'
import Nav from './Components/Nav'
import About from './Components/About'
import Videos from './Components/Videos'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route path='/' component={Nav} />
					<Route path='/' exact component={HomePage} />
					<Route path='/about' exact component={About} />
					<Route path='/videos' exact component={Videos} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/' component={Footer} />
				</div>
			</Router>
		);
	}
}

export default App;
