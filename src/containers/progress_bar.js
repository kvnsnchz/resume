import React, { Component } from 'react';

class ProgressBar extends Component{
    
    render(){
        var circles = [];
        for(var i = 0; i < this.props.filled; i++){
            circles.push(<div className="circle-filled" key={i.toString()}></div>);
        }
        for(var j = 0; j < this.props.void; j++){
            circles.push(<div className="circle-void" key={(j+i).toString()}></div>);
        }

        return(
            <div className="progress-bar-wrapper">
                {circles}
            </div>
        );
    }
}

export default ProgressBar;