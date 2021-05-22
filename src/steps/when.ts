import { When } from "cucumber";
import findElement from "../support/helpers/findElement";
import findElements from "src/support/helpers/findElements";

When(/^I proceed to the "([^"]*)?"$/, (mappingName: string) => {
  if (mappingName === "First Question") {
    const startButton = findElement("Start Button");
    browser.pause(1000);
    startButton.click();
    const goButton = findElement("Go Button");
    browser.pause(1000);
    goButton.click();
  } else {
    throw new Error(`Not yet implemented "${mappingName}"`);
  }
});

When(/^I select(?: at least one| the) "([^"]*)?"$/, (mappingName: string) => {
  const element = findElement(mappingName);
  browser.pause(1000);
  element.click();
});
