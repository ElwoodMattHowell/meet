Feature: Show / Hide an events details

  Scenario: An event element is collapsed by default
    Given A user is logged on.
    When No event is selected
    Then The details of the event will be collapsed

  Scenario: User can expand an event to see its details
    Given The user is interested in an event
    When The user clicks on an event
    Then The details of the event will expand

  Scenario: User can collapse an event to hide its details
    Given The user has gathered all the information they need about an event
    When The user clicks on the expanded event
    Then The event details will collapse