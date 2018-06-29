import React, { Component } from 'react';

class Education extends Component{

    render(){
        const info = this.props.educ.info.map((info,index) => 
            <li key={index}> {info} </li>
        );
        return(
            <div className="education-wrapper">
                <h3> <strong> {this.props.educ.name} </strong> </h3>
                <h3>{this.props.educ.institution}</h3>
                <p className="important">{this.props.educ.date}</p>
                <p className="important">Información</p>
                <ul>{info}</ul>
            </div>

        );
    }
}

export default Education;