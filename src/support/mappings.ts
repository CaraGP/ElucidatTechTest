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

const elementMappings = new Map([["Course Title", ".projectTitle"]]);

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
