import React, { Component } from 'react';

import GeoLocation from '../geoLocation';
import './fireReport.css';

class FireReport extends Component {
  render() {
    return (
      <form className='report-form'>
        <br />
        <GeoLocation />
        <button className='fire-btn'>Report Fire</button>
      </form>
    )
  }
}

export default FireReport;