import React, { Component } from 'react';

import EventList from './EventList.js';
import CitySearch from './CitySearch.js';
import NumberOfEvents from './NumberOfEvents.js';
import WelcomeScreen from './WelcomeScreen';

import './nprogress.css';
import './App.css';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api.js';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventcount: 10,
    currentLocation: 'all',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, this.state.eventcount),
            locations: extractLocations(events)
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.eventcount),
          currentLocation: location
        });
      }
    });
  }
  setEventCount = (eventcount) => {
    this.setState({
      eventcount: eventcount
    });
    this.updateEvents(this.state.currentLocation);
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents setEventCount={this.setEventCount} placeholder={this.state.eventcount} />
        <div className="EventContainer">
          <EventList events={this.state.events} />
        </div>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
