import React, { Component } from 'react';
import { contactInformation } from '../constants/values';
import Contact from './contact.js';

class ContactBar extends Component {
 render () {
  const rows = contactInformation.map((contact, index) => 
    <Contact contact={contact} key={index} />
  );
 
  return (
    
    <div className="bar-wrapper">
      {rows}
    </div>
  );
 }
}

export default ContactBar;
