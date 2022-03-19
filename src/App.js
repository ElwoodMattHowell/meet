import React, { Component } from 'react';

import EventList from './EventList.js';
import CitySearch from './CitySearch.js';
import NumberOfEvents from './NumberOfEvents.js';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { WarningAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './nprogress.css';
import './App.css';
import { extractLocations, getEvents, checkToken, getAccessToken } from './api.js';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventcount: 10,
    currentLocation: 'all',
    // showWelcomeScreen: undefined,
    warningText: ""
  }

  async componentDidMount() {
    this.mounted = true;
    if (!navigator.onLine) {
      this.setState({
        warningText: "You are currently off line"
      });
    } else {
      this.setState({
        warningText: ""
      });
    }
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
      console.log(locationEvents)
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    console.log("break")
    console.log(data);
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents setEventCount={this.setEventCount} placeholder={this.state.eventcount} />
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis stroke="aqua" dataKey="city" name="city" type="category" />
              <YAxis stroke="aqua" dataKey="number" name="number of events" type="number" allowDecimals={false} />
              <Tooltip labelFormatter={() => { return ''; }} cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="EventContainer">
          <EventList events={this.state.events} />
        </div>
        <div className={this.state.warningText === "" ? "alert-container" : "alert-container-visible"}>
          <WarningAlert text={this.state.warningText} />
        </div>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
