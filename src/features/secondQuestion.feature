Feature: Second Question
    As a user
    I want to continue to the second question
    So that I can continue the assessment

Background: Second Page
Given I navigate to "Elucidat Course"
And I proceed to the "Second Question"

Scenario: Submit button is disabled by default
Then I should see the "Disabled Submit button"

Scenario: Selecting as least one answer activates the Submit button
When I select at least one "Text Answer Option"
Then I should see the "Enabled Submit button"

Scenario: Selecting the active Submit button processes the response and navigates user to the second question
When I select at least one "Text Answer Option"
And I select the "Enabled Submit button"
Then the "Question Header" should include "chemical spillage"