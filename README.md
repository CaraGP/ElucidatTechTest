# Elucidat Technical Test

This wdio test suite project should cover the following task:

> Using one of the popular test automation frameworks write a script to test the following link.
>
> [Automation test link](https://learning.elucidat.com/course/602f99d64d0ac-602f9cb9b350d)

This project was built using [WebdriverIO 6](https://v6.webdriver.io/docs/gettingstarted.html), using Node.js, Cucumber.js and Typescript.

# Getting Started

This project uses npm, so to install dependencies please use the following command:

```sh
$ npm install
```

This project also uses the Allure Reporter, in order to review the report, you will need to have the following installed on your machine:

- Java Runtime
- Serve

_If you run the suite/any tests without Java installed, there will be an error and a pop-up prompt, but the tests will still run as expected._

To serve the Allure Report locally:

```sh
$ serve allure-report
```

# Test Information

All the tests are written in [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/) and all test files can be found and should be added in `./src/features/*` with the file ending `.feature`.

The tests are currently run in Sync mode, set to run 1 chrome instance at a time.

## How to run a single test

```sh
$ npx wdio wdio.conf.js --spec ./src/features/{featureName}.feature
```

## How to run the full suite of tests

_Runs all feature files_

```sh
$ npx wdio wdio.conf.js
```

## Adding new steps

The test steps have been written in a fashion that allows them to be versatile and hopefully as reusable as needed. To do this, the variables present in any steps are defined using regular expressions.

To update or add any new step definitions, you can find them in `./src/steps`.

They are currently separated by `given`, `when` and `then`.

## Adding screenshots on steps

Currently the suite will generate a screenshot if there are any failed steps. However it is possible to simply add screenshots on steps regardless if they fail or pass: [wdio documentation for screenshots.](https://v6.webdriver.io/docs/api/browser/saveScreenshot.html)

You can also take screenshots of particular elements rather than of the browser window: [wdio documentation for element screenshots.](https://v6.webdriver.io/docs/api/element/saveScreenshot.html)

Screenshots taken are stored in `./screenshots`.
