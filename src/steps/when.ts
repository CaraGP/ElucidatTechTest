import { When } from "cucumber";
import findElement from "../support/helpers/findElement";
import findElements from "src/support/helpers/findElements";

When(/^I proceed to the "([^"]*)?"$/, (mappingName: string) => {
  if (mappingName === "First Question") {
    findElement("Start Button").click();
    findElement("Go Button").click();
  } else {
    throw new Error(`Not yet implemented "${mappingName}"`);
  }
});
