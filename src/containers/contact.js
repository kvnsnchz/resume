import React, { Component } from 'react';

import { Icon } from 'antd';
import '../../node_modules/antd/dist/antd.css';

class Contact extends Component{

    render(){
        var p = [];;
        if(this.props.contact.link){
           p.push(<p><a href={this.props.contact.link}><Icon  type={this.props.contact.icon} /> {this.props.contact.value}</a></p>);
        }
        else{
            p.push(<p><Icon  type={this.props.contact.icon} /> {this.props.contact.value}</p>);
        }
        return(
            <div>{p}</div>
        );
    }
}

export default Contact;