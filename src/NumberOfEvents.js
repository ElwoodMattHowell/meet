import React, { Component } from 'react';

class NumberOfEvents extends Component {

  handleInputChange(eventcount) {
    this.props.setEventCount(eventcount);
  }

  render() {
    return (<>
      <div className="NumberOfEvents">
        <label>
          <p><strong>Number of events to be shown</strong></p>
        </label>
        <input
          className="number-of-events-input"
          type="number"
          placeholder={this.props.placeholder}
          onChange={e => { this.handleInputChange(e.target.value) }} />
      </div>
    </>)

  }
}

export default NumberOfEvents