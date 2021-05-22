const urlMappings = new Map([
  [
    "Elucidat Course",
    "https://learning.elucidat.com/course/602f99d64d0ac-602f9cb9b350d",
  ],
]);

const getUrlMapping = (expectedMapping: string): string => {
  if (urlMappings.has(expectedMapping)) {
    return urlMappings.get(expectedMapping);
  } else {
    throw new Error(
      `Expected URL mapping "${expectedMapping}" has not been found`
    );
  }
};

const elementMappings = new Map([
  ["Course Title", ".projectTitle"],
  ["Question Text", ".question__header__text"],
  ["Start Button", "#pa_602f99d67dab9_p15766ba6ccd-button__text"],
  ["Go Button", ".button=Go"],
  ["Submit button", ".save_button.fake_save_button--disabled"],
]);

const getElementMapping = (expectedMapping: string): string => {
  if (elementMappings.has(expectedMapping)) {
    return elementMappings.get(expectedMapping);
  } else {
    throw new Error(
      `Expected Element mapping "${expectedMapping}" has not been found`
    );
  }
};

export { getUrlMapping, getElementMapping };
