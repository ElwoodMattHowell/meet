import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user has not specified a number, 10 is the default number', ({ given, when, then }) => {
    given('The user has not selected a number of events to be shown', () => {

    });
    let AppWrapper;
    when('The user logs on', () => {
      AppWrapper = mount(<App />)
    });

    then('The default number of events shown will be 10', () => {
      expect(AppWrapper.state('eventcount')).toBe(10)
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('The user wants to see more or less events on the page', () => {
      AppWrapper = mount(<App />)
    });

    when('They enter the desired number of events to see', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.find('.number-of-events-input').simulate('change', {
        target: {
          value: 15
        }
      });
    });

    then('They will be able to choose the number of events they can see at once', () => {
      expect(AppWrapper.state('eventcount')).toBe(15)
    });
  });
});

