import React, { Component } from 'react';

class NumberOfEvents extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     SelectedNumberOfEvents: 32
  //   }
  // }

  // setNumberofEvents(e) {
  //   this.setState({
  //     SelectedNumberOfEvents: e
  //   })
  // }

  render() {
    return (<>
      <div>
        <label>Number of Events</label>
        <input
          className="number-of-events-input"
          type="number"
          placeholder={"Number of Events to be Shown"}
          onChange={e => { this.props.setEventCount(e.target.value) }} />
      </div>
    </>)

  }
}

export default NumberOfEvents