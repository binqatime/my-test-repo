Feature: Jysk Tests

  Background:
    Given the user opens Jysk website and accepts cookies

  Scenario: User opens the home page of the website
    When user observes the home page
    Then user sees the main title

  Scenario: User goes through menu
    When user opens the menu
    And user clicks on 'Офіс' category
    Then user sees the 'Офіс' category

  Scenario: User performs search on the website
    When user types 'стіл' into the search field and presses enter
    Then user sees the page with the following results '768 результатів для: стіл'
