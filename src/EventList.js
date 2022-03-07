import React, { Component } from 'react';
import Event from './Event.js';

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className={this.props.events.length > 6 ? "eventlist" : "mineventlist"}>
        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;