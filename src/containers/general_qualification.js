import React, { Component } from 'react';
import ProgressBar from './progress_bar.js';

class GeneralQualification extends Component{

    render(){
        return(
            <div className="qualification-wrapper">
                <p>{this.props.qualification.name}</p>
                <ProgressBar filled={this.props.qualification.filled} void={this.props.qualification.void}/>
            </div>
        );
    }
}

export default GeneralQualification;