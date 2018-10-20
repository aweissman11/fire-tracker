import React, { Component } from 'react';

import './fireReport.css';

class FireReport extends Component {
  render() {
    return (
      <form className='report-form'>
        <input placeholder='Location'></input>
        <input placeholder='Severity'></input>
        <button>Report Fire</button>
      </form>
    )
  }
}

export default FireReport;