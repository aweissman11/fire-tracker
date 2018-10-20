import React, { Component } from 'react';

class Reporter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.reportSomething}>Report a Fire</button>
      </div>
    )
  }
}

export default Reporter;