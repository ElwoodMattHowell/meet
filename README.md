# meet

<h2>Project Details</h2>
<h2>Key Features</h2>

-  Filter events by city.

-  Show/hide event details.

-  Specify number of events.

-  Use the app when offline.

-  Add an app shortcut to the home screen.

-  View a chart showing the number of upcoming events by city.

<h2>Test Scenarios</h2>
<p>
Feature 1: Filter events by city
User Story: As a user, I should be able to filter events by cities, so that I can see the list of events by cities
    Given: The user hasn't searched for any city
    When: The user opens the app
    Then: The user should see a list of all upcoming events
  Scenario 2: User should see a list of suggestions when they search for a city
    Given: The main page is open
    When: The user starts typing in the city textbox
    Then: The user should see a list of cities that match what they've typed
  Scenario 3: User can select a city from the suggested list
    Given: The user was typing "Berlin" in the city textbox and the list of suggested cities is showing
    When: The user selects a city (e.g., "Berlin, Germany") from the list
    Then: Their city should be changed to that city(i.e., "Berlin, Germany") and the user should recieve a list of upcoming events in that city.


Feature 2: Show / Hide and event’s details
User Story: As a user, I should be able to select events and access any details I need for that event.
  Scenario 1: An event element is collapsed by default
    Given: A user is logged on.
    When: No event is selected
    Then: The details of the event will be collapsed
  Scenario 2: User can expand an event to see it’s details
    Given: The user is interested in an event
    When: The user clicks on an event
    Then: The details of the event will expand
  Scenario 3: User can collapse an event to hide its details
    Given: The user has gathered all the information they need about an event
    When: The user clicks on the expanded event
    Then: The event details will collapse

Feature 3: Specify number of events
User Story: As a user I should be able to control the amount of information I am shown on each page.
  Scenario 1: When user hasn’t specified a number, 32 is the default number
    Given: The user has not selected a number of events to be shown
    When: The user logs on
    Then: The default number of events shown will be 32
  Scenario 2: User can change the number of events they want to see
    Given: The user wants to see more or less events on the page
    When: They enter the desired number of events to see
    Then: They will be able to choose the number of events they can see at once
 
Feature 4: Use the app when offline
User Story: As a user, I should be able to access any stored information on the app even if I am offline.
  Scenario 1: Show cached data when there’s no internet connection
    Given: The user does not have access to the internet
    When: The user opens the app and has cached data
    Then: The user will have access to the cached data
  Scenario 2: Show error when user changes the settings (city, time range)
    Given: The user is offline and using the app
    When: The user attempts to change the settings
    Then: The user will get an error message

Feature 5: Data visualization
User Story: As a user I should be able to view upcoming events in a convenient format.
  Scenario 1: Show a chart with the number of upcoming events in each city
    Given: The user has logged in
    When: The user wants to see upcoming events
    Then: The user will be able to see a chart of upcoming events
</p>
