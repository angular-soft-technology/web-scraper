import React, {Component} from 'react';
import '../../Client/development/css/style.css';
import ourlogo from '../../Client/development/images/misc/ralogo_monogram.png';
import DeveloperTeam from './DeveloperTeam';

class App extends Component {
	render() { 
		return (
			<div className="App-holder">
				<div className="App">
					<img src={ourlogo} />
					<DeveloperTeam/>
				</div>
			</div>
		);
	}
} 

export default App;
