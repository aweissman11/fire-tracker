import React, { Component } from 'react';

import './reporter.css'

class Reporter extends Component {
  render() {
    return (
      <div 
        className='reporter'
      >
        <button
          className='report-btn'
          onClick={this.props.reportSomething}
        >
          Report a Fire
        </button>
      </div>
    )
  }
}

export default Reporter;