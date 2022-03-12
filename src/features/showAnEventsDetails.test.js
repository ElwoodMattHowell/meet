import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

const feature = loadFeature('./src/features/showAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventWrapper;
    given('A user is logged on.', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />)
    });

    when('No event is selected', () => {

    });

    then('The details of the event will be collapsed', () => {
      EventWrapper.update();
      expect(EventWrapper.find('.event__details')).toBeNull;
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let EventWrapper;
    given('The user is interested in an event', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />)
    });

    when('The user clicks on an event', () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('The details of the event will expand', () => {
      expect(EventWrapper.state('expandedDetails')).toBe(true);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    let EventWrapper
    given('The user has gathered all the information they need about an event', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />)
      EventWrapper.setState({ expandedDetails: true });
    });

    when('The user clicks on the expanded event', () => {
      EventWrapper.find('.details-btn').simulate('click');
    });

    then('The event details will collapse', () => {
      expect(EventWrapper.state('expandedDetails')).toBe(false);
    });
  });

});