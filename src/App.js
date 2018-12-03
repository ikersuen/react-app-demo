import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0}
  render() {
    return (
      <div>
        <button>Hello world!</button>number: {this.state.number}
      </div>
    );
  }
}

export default App;
