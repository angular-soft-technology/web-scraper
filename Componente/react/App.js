import React, {Component} from 'react';
import '../../Client/development/css/style.css';
import ourlogo from '../../Client/development/images/misc/ralogo_monogram.png';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navigation from './Navigation';


class App extends Component {
	render() { 
		return (
			<div className="App-holder">
				<div className="App">
					<BrowserRouter>
						<Navigation/>
						
						<Switch>
							<Route path="/" component={Home} exact/>
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route component={Error} />
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
} 

export default App;
