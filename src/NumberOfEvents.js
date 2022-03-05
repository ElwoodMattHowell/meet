import React, { Component } from 'react';

class NumberOfEvents extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     selectedNumberOfEvents: 10
  //   }
  // }

  handleInputChange(eventcount) {
    // this.setState({
    //   selectedNumberOfEvents: eventcount
    // })
    this.props.setEventCount(eventcount);
  }

  render() {
    return (<>
      <div>
        <label>Number of Events</label>
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