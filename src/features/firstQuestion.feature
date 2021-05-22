Feature: First Question
    As a user
    I want to sucessfully navigate to the first question
    So that I can begin the assessment

Background: First Page
Given I navigate to "Elucidat Course"
And I proceed to the "First Question"

Scenario: User can navigate sucessfully to the first question
Then I should see the "Question Text"

# Scenario: Submit button is disabled by default
# Then the "Submit button" should be "disabled"

# Scenario: Selecting as least one answer activates the Submit button
# When I select at least one "Answer Option"
# Then the "Submit button" should be "enabled"

# Scenario: Selecting the active Submit button processes the response and navigates user to the second question
# When I select at least one "Answer Option"
# And I select the "Submit button"
# Then I am navigated to the "Second Question"