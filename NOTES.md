# General Notes and To-Do List

# General Notes

I have included a To Do list here, which covers any extras I would have liked/should look into more.

This test suite so far only covers a small snippet of the "vanilla" Happy Path and really should be extended to cover overall functionality throughout the course.

## Site Tidbits

_Thought I'd mention any thoughts picked up through the creation of this project and exploring the test site._

- No QA IDs. These would make it a lot easier for QA to implement better mappings and variables throughout the suite.
- The Answer Image Cards do not have a uniform id naming convention. The last three have a slightly different name structure compared to the first three. This could make it difficult if trying to grab the images into an array using their ids.
- Lots of browser.pause. Found the page animations made the elements jump around the screen and caused the steps to fail because it couldn't locate the specific things it was asked to find. Pauses helped reduce this jump and the suite became a whole lot more stable. Attempted to inject a script to turn off the animations, but I don't think this site was built with standard CSS.
- I found that on the 4th Question, undoing all the drag and drops did not disable the Submit button. Not sure if this is as designed or potentially an overlooked requirement.
- To check if the Undo button on the 4th question was disabled by default, I had to check for a particular attribute vs state. This potentially suggests that these components are built with invalid html.
- Had to implement a beforeScenario step to delete the cookie ("learner_session"), as the scenarios after the first one, would not return to the Landing Page.

# To-Do (What I would do for future iterations)

_Not in priority order_

- Add docker compose so that the project runs in a container and users won't have to worry about needing particular versions of anything on their local machines.
- Update wdio config to implement other browsers so that the tests can run against them, rather than just run against chrome. Could add something like BrowserStack.
- Fully cover all functionality throughout the course.
- Add fail and edge cases, plus any extras which would be nice to have in order to help with confidence in the suite and expected behaviours.
- Upgrade to WebdriverIO 7.
- Fully upgrade all dependencies. All are at highest minor version.
- Refactor the When step that navigates to certain pages within the course.

# Known Issues

## Suite doesn't display pending step snippets (Minor)

Not sure exactly why not, probably a config issue and I'm overlooking something(s).

## Issue with the Landing Page's start button (Minor)

I couldn't select it in the same way as I have done with the Go button (".button=Start"). Had to just use the id instead. With QA IDs implemented, this hopefully would be a non-issue.
