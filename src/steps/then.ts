import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";

Then(/^I should (?:see the|be on) "([^"]*)?"$/, (mappingName: string) => {
  findElement(mappingName);
});

Then(
  /^the "([^"]*)?" should include "([^"]*)?"$/,
  (elementMapping: string, expectedText: string) => {
    const element = findElement(elementMapping);
    expect(element).toHaveTextContaining(expectedText);
  }
);

Then(
  /^the "([^"]*)?" is set to "([^"]*)?"$/,
  (elementMapping: string, status: string) => {
    const element = findElement(elementMapping);
    const elementStatus = element.getAttribute(status);
    expect(elementStatus).toBe("true");
  }
);

Then(/^the dragged card should return$/, () => {
  const element = findElement("Draggable Answer Option");
  expect(element).not.toHaveClass("e-dropped");
});
