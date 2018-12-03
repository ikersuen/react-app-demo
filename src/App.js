import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0}
  upadteStateNumber = () => { this.setState({number: 1}) }
  render() {
    return (
      <div>
        <button onClick= {this.upadteStateNumber}>Hello world!</button>number: {this.props.defaultNumber}
      </div>
    );
  }
}

export default App;
