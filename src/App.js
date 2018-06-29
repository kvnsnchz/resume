import React, { Component } from 'react';
import './App.css';
import Header from './containers/header';
import ContactBar from './containers/contactBar';
import Body from './containers/body';
import Footer from './containers/footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <ContactBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;