import { getElementMapping } from "../mappings";
import { BrowserObject } from "@wdio/sync";

const findElement = (
  mappingName: string,
  parentElement: WebdriverIO.Element | BrowserObject = browser
): WebdriverIO.Element => {
  const selector = getElementMapping(mappingName);
  const element = parentElement.$(selector);
  element.waitForExist({
    timeoutMsg: `Could not find "${mappingName}" using "${selector}"`,
    timeout: 60000,
  });

  return element;
};

export default findElement;
