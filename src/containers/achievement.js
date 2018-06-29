import React, { Component } from 'react';

class Achievement extends Component{

    render(){
        return(
            <div className="achievement-wrapper">
                <h4> <strong>{this.props.achiev.name}</strong> </h4>
                <p>{this.props.achiev.description}</p>
            </div>
        );
    }
}

export default Achievement;