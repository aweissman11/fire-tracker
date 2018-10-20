import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Reporter from './reporter';
import Mapper from './mapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reporter />
        <Mapper />
      </div>
    );
  }
}

export default App;
