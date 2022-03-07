import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event.js';
import { mockData } from '../mock-data.js';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });
  test('event name renders', () => {
    expect(EventWrapper.find('.summary').text()).toBe("Learn JavaScript");
  });
  test('event date renders', () => {
    expect(EventWrapper.find('.date-time').text()).toBe(`${mockData[0].start.dateTime}(${mockData[0].start.timeZone})`);
  })
  test('event location renders', () => {
    expect(EventWrapper.find('.location').text()).toBe(`@${mockData[0].summary} | ${mockData[0].location}`);
  })
  test('show details when details button clicked', () => {
    EventWrapper.setState({ expandedDetails: false });
    EventWrapper.find('.details-btn').simulate('click');
    expect(EventWrapper.state('expandedDetails')).toBe(true);
  })
})