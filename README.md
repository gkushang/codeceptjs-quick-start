# codeceptjs-quick-start

***[CodeceptJS][1] Acceptance Tests***


## About

> This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library

* Scenarios are written in **Ghernkin BDD Syntax**, a.k.a `.feature` files. [Prefer writing Declartive Test Scenarios][2]

* Uses [Should.js][3] Assertions Library. Various assertions with examples are available [here][7]

* Reduces Flakieness with **RetryFailedSteps** plugin and a Webdriver's **SmartWait**

* Page objects follow `<name_of_page>.page.js` naming pattern, and created under [pages][4] directory

* Step Definitions files follows `<name_of_step>.steps.js` naming pattern, and created under [step_definitions][5] directory

## Colocate CodeceptJS to your existing project

Follow this [Easy 3-Steps process][8] to setup CodeceptJS with Cucumber/Gherkin for your project

## Install

Prefer installing [yarn][6]

```bash
    cd codeceptjs-quick-start
    yarn
```

## Run Acceptance Tests

### Run all tests serially

Default browser is `chrome`

```bash
    yarn test:acceptance
```

To run on `firefox`

```bash
    yarn test:acceptance -- --profile firefox
```

To run on `headless` browser

```bash
    CODECEPT_ENV=headless yarn test:acceptance
```

### Run all tests parallel

```bash
    yarn test:acceptance:parallel
```

### Launch HTML Report

```bash
    yarn test:acceptance:launchReport
```

>

## Sample Feature File

```bash

@search
Feature: Search Github

  In order to see Github Search works
  As a Github user
  I want to be able to search for repository

 @search_repository
  Scenario: Fred should see the highlighted results for the searched repository

    Given Fred is on Github Homepage
    When he searches for the "codeceptjs-quick-start"
    Then he sees all the detailed highlighted results including description or license info and many more
  
```


[1]: https://codecept.io/
[2]: https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios
[3]: https://shouldjs.github.io/
[4]: https://github.com/gkushang/codeceptjs-quick-start/tree/master/tests/acceptance/pages
[5]: https://github.com/gkushang/codeceptjs-quick-start/tree/master/tests/acceptance/step_definitions
[6]: https://yarnpkg.com/en/docs/install#mac-stable
[7]: https://github.com/gkushang/codeceptjs-quick-start/blob/master/tests/acceptance/step_definitions/github.steps.js
[8]: https://github.com/gkushang/codeceptjs-quick-start/blob/master/tests/ADD_TO_PROJECT.md
