import React, { Component } from 'react';
import logo from './logo.svg';
import Number from './components/Number.js'; 
import './App.css';

class App extends Component {
  state = {number: this.props.defaultNumber}
  upadteStateNumber = () => { this.setState({number: this.props.onClickHw(this.state.number)}) }
  render() {
    return (
      <div>
        <button onClick= {this.upadteStateNumber}>Hello world!</button><Number /> {this.state.number}
      </div>
    );
  }
}

export default App;
