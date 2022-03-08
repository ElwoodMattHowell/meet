import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();

    this.state = {
      expandedDetails: false
    }
  }

  expandDetails = () => {
    this.setState({ expandedDetails: !this.state.expandedDetails })
  }

  render() {
    const { event } = this.props;
    const { expandedDetails } = this.state;

    return (
      <>
        <div className="event">
          <h1 className="summary">{event.summary}</h1>
          <p className="date-time">{event.start.dateTime}({event.start.timeZone})</p>
          <p className="location">@{event.summary} | {event.location}</p>
          {expandedDetails && (
            <div className="event__Details">
              <h2>About Event</h2>
              <a href={event.htmlLink} target="blank">See details on Google Calendar</a>
              <p>{event.description}</p>
            </div>
          )}
          <button className="details-btn" onClick={this.expandDetails}>{!expandedDetails ? "show details" : "hide-details"} </button>
        </div>
      </>
    )
  }
}

export default Event;