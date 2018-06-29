import React, { Component } from 'react';
import { contactInformation } from '../constants/values';

class ContactBar extends Component {
 render () {
  const rows = contactInformation.map((contact, index) => 
    <p key={index}>{contact}</p>
  );
 
  return (
    
    <div className="bar-wrapper">
      {rows}
    </div>
  );
 }
}

export default ContactBar;
