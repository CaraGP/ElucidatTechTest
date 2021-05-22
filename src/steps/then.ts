import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";
import findElements from "../support/helpers/findElements";
import { expectEqual } from "../support/helpers/assertions";

Then(/^I should see the "([^"]*)?"$/, (mappingName: string) => {
  findElement(mappingName);
});

Then(
  /^the "([^"]*)?" should include "([^"]*)?"$/,
  (elementMapping: string, expectedText: string) => {
    const element = findElement(elementMapping);

    expect(element).toHaveTextContaining(expectedText);
  }
);
