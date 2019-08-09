import React, {Component} from 'react';

import '../../Client/development/css/style.css';

const image = require ('../../Client/development/images/misc/ralogo_monogram.png');

class App extends React.Component {
	render() { 
		return (
			<div className="App">test 2 <img src={image}/></div>
			);
	}
} 

export default App;
