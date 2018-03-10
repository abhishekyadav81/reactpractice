import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StockList from './StockList';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div>
        <StockList />
        <UserList />
      </div>
    );
  }
}

export default App;
