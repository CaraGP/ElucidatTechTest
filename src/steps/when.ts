import { When } from "cucumber";
import findElement from "../support/helpers/findElement";
import findElements from "src/support/helpers/findElements";

When(/^I proceed to the (\d+)(?:st|nd|rd|th) question$/, (section: number) => {
  const startButton = findElement("Start Button");
  browser.pause(1000);
  startButton.click();
  const goButton = findElement("Go Button");
  browser.pause(1000);
  goButton.click();
  if (section >= 2) {
    const firstQAnswer = findElement("Image Answer Option");
    browser.pause(1000);
    firstQAnswer.click();
    const firstQSubmit = findElement("Enabled Submit button");
    browser.pause(1000);
    firstQSubmit.click();
    if (section >= 3) {
      const secondQAnswer = findElement("Text Answer Option");
      browser.pause(1000);
      secondQAnswer.click();
      const secondQSubmit = findElement("Enabled Submit button");
      browser.pause(1000);
      secondQSubmit.click();
      if (section >= 4) {
        browser.pause(1000);
        const thirdQAnswer = findElement("Text Answer Option");
        browser.pause(1000);
        thirdQAnswer.click();
        const thirdQSubmit = findElement("Enabled Submit button");
        browser.pause(1000);
        thirdQSubmit.click();
      }
    }
  }
});

When(/^I select (?:at least one|the) "([^"]*)?"$/, (mappingName: string) => {
  const element = findElement(mappingName);
  browser.pause(1000);
  element.click();
});

When(/^I drag and drop the top "([^"]*)?"$/, (mappingName: string) => {
  const element = findElement(mappingName);
  browser.pause(1000);
  const targetLocation = $("#pa_602f99d691558_p17395ca1e6c-dropbox-2");
  element.dragAndDrop(targetLocation);
});
