/*
  Test helpers
 */
const printSuccess = (testName) => console.info(`[PASSED] ${testName}`);

const printError = (error, testName) => {
  console.error(`[FAILED] ${testName}\n\t Actual: "${error.actual}"\n\t Expected: "${error.expected}"`);
};

const test = (testName, testFunction) => {
  try {
    testFunction();

    printSuccess(testName);
  } catch (error) {
    printError(error, testName);
  }
};

module.exports = test;
