import React, { Component } from 'react';

class Abilitie extends Component{

    render(){
        return(
            <div className="abilitie-wrapper">
                <p> {this.props.name} </p>
            </div>
        );
    }
}

export default Abilitie;