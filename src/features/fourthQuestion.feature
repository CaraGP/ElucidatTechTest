Feature: Fourth Question
    As a user
    I want to continue to the fourth question
    So that I can continue the assessment

Background: Fourth Page
Given I navigate to "Elucidat Course"
And I proceed to the 4th question

Scenario: Submit button is disabled by default
Then I should see the "Disabled Submit button"

Scenario: Undo button is disabled by default
Then the "Undo button" is set to "disabled"

Scenario: Selecting the Undo button returns first Answer Option to the card stack
And I drag and drop the top "Dragable Answer Option"
When I select the "Undo button"
Then the dragged card should return

Scenario: Selecting the active Submit button processes the response and navigates user to the fifth question
And I drag and drop the top "Dragable Answer Option"
When I select the "Enabled Submit button"
Then I should be on "Part 2"