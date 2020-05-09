import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Learn from './Learn';

class App extends Component {

  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <div>krarunraaj</div>
  }
}

export default App;
