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
  ["Start Button", "#pa_602f99d67dab9_p15766ba6ccd-button__text"],
  ["Go Button", ".button=Go"],
  ["Question Header", ".question__header__text"],
  ["Disabled Submit button", ".fake_save_button--disabled"],
  ["Image Answer Option", "#pa_602f99d685e21_p157047c2abc-imgCard--answer-1"],
  ["Enabled Submit button", ".save_button"],
  ["Text Answer Option", ".textCard.answer"],
  ["Draggable Answer Option", "#pa_602f99d691558_p17395ca1e67-dropper-1"],
  ["Undo button", ".e-undo_button"],
  ["Part 2", "#pa_602f99d697407_p1738fd505b7-image"],
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
