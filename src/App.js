import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Reporter from './reporter';
import Mapper from './mapper';
import FireReport from './fireReport';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isReporting: false
    }
  }

  reportSomething = () => {
    this.setState({isReporting: !this.state.isReporting})
  }

  render() {
    return (
      <div className="App">
        <Reporter 
          reportSomething={this.reportSomething}
        />
        {
          this.state.isReporting ?
          <FireReport /> :
          <div></div>
        }
        <Mapper  />
      </div>
    );
  }
}

export default App;
