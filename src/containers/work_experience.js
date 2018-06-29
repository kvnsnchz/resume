import React, { Component } from 'react';

import { Icon } from 'antd';
import '../../node_modules/antd/dist/antd.css';

class WorkExperience extends Component{
    
    render(){
        const tasks = this.props.work.tasks.map((task,index) => 
            <li key={index} >{task}</li>
        );
        return(
            <div className="work-wrapper">
                <h3> <strong> {this.props.work.work} <a href={this.props.work.link}><Icon  type='link' /></a></strong> </h3>
                <h3>{this.props.work.organization}</h3>
                <p className="important">{this.props.work.date}</p>
                <p>{this.props.work.descrip_org}</p>
                <p className="important">Logros / Tareas</p>
                <ul>{tasks}</ul>
                <p> <strong className="important"> Jefe:</strong> {this.props.work.boss} - {this.props.work.email_boss}</p>
            </div>

        );
    }
}

export default WorkExperience;