import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents.js';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  })
  test('input for number of events renders', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events-input')).toHaveLength(1);
  })
  test('number of events shown at open to be 32', () => {
    expect(NumberOfEventsWrapper.state("SelectedNumberOfEvents")).toBe(32);
  })
  test('number of events to change on input', () => {
    NumberOfEventsWrapper.find(".number-of-events-input").simulate('change', {
      target: {
        value: 10
      }
    });
    expect(NumberOfEventsWrapper.state("SelectedNumberOfEvents")).toBe(10);
  })
})