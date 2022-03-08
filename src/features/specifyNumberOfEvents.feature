Feature: Specify number of events

  Scenario: When user has not specified a number, 10 is the default number
    Given The user has not selected a number of events to be shown
    When The user logs on
    Then The default number of events shown will be 10

  Scenario: User can change the number of events they want to see
    Given The user wants to see more or less events on the page
    When They enter the desired number of events to see
    Then They will be able to choose the number of events they can see at once