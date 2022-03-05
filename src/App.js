import React, { Component } from 'react';

import EventList from './EventList.js';
import CitySearch from './CitySearch.js';
import NumberOfEvents from './NumberOfEvents';

import './nprogress.css';
import './App.css';
import { extractLocations, getEvents } from './api.js';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventcount: 32
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      locationEvents.length = Math.min(eventcount, locationEvents.length);
      this.setState({
        events: locationEvents
      });
    });
  }
  setEventCount = (count) => {
    this.setState({
      eventcount: count
    })
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents setEventCount={this.setEventCount} />
      </div>
    );
  }
}

export default App;
