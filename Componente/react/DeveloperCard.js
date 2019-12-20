import React, {Component} from 'react';

class DeveloperCard extends Component{
    static defaultProps = {
        info: 'I am a developer for Angular Soft Technology'
    }
    render(){
        return(
            <div className="DeveloperCard">
                <div className="DeveloperFoto">{this.props.image}</div>
                <h3 className="DeveloperName">{this.props.name}</h3>
                <p className="DeveloperDescription">{this.props.info}</p>
            </div>
        );
    }
}

export default DeveloperCard;