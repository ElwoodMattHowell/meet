import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();

    this.state = {
      errorText: ""
    }
  }

  handleInputChange(eventcount) {
    if (!eventcount) {
      this.setState({
        errorText: ""
      });
      this.props.setEventCount(10);
    } else if (eventcount > 0 && eventcount <= 40) {
      this.setState({
        errorText: ""
      });
      this.props.setEventCount(eventcount);
    } else {
      this.setState({
        errorText: "Please enter a number between 1 and 40"
      });
    }
  }

  render() {
    return (<>
      <div className="NumberOfEvents">
        <div className={this.state.errorText === "" ? "alert-container" : "alert-container-visible"} >
          <ErrorAlert text={this.state.errorText} className="alert" />
        </div>
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