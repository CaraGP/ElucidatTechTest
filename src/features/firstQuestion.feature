Feature: First Question
    As a user
    I want to sucessfully navigate to the first question
    So that I can begin the assessment

Background: First Page
Given I navigate to "Elucidat Course"
And I proceed to the "First Question"

Scenario: User can review the first question
Then the "Question Header" should include "first task"

Scenario: Submit button is disabled by default
Then I should see the "Disabled Submit button"

Scenario: Selecting as least one answer activates the Submit button
When I select at least one "Image Answer Option"
Then I should see the "Enabled Submit button"

Scenario: Selecting the active Submit button processes the response and navigates user to the second question
When I select at least one "Image Answer Option"
And I select the "Enabled Submit button"
Then the "Question Header" should include "A colleague"