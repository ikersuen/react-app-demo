import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0}
  alert = () => {alert("now you know how to handle onclick event")}
  render() {
    return (
      <div>
        <button onClick={this.alert}>Hello world!</button>number: {this.state.number}
      </div>
    );
  }
}

export default App;
