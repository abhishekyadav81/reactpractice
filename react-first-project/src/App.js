import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App1 extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer text="This is header" copyright="copyright@2018"/>
      </div>      
    );
  }
}

export default App1;
