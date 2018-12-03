import React, { Component } from 'react';
import logo from './logo.svg';
import Number from './components/Number.js'; 
import Line from './components/Line.js'; 
import './App.css';

class App extends Component {
  state = {
    number: this.props.defaultNumber,
    kyle: new Array(1).fill(0)
  }
  upadteStateNumber = () => { 
    const temp = this.props.onClickHw(this.state.number)
    this.setState({
      number: this.props.onClickHw(this.state.number),
      kyle: new Array(temp).fill(0)
    }) 
  }
  render() {
    return (
      <div>
        <button onClick= {this.upadteStateNumber}>Hello world!</button><Number /> {this.state.number}
        {this.state.kyle.map(()=>(<Line />))}
      </div>
    );
  }
}

export default App;
