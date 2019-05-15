# codeceptjs-quick-start

***[CodeceptJS][1] Acceptance Tests***

## Install

```bash
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

## About

#### Scenarios are written in Ghernkin Syntax, a.k.a .feature files

Best Practices: [Prefer writing Declartive Test Scenarios and Feature files][2]

#### Uses [Should.js][3] Library

#### Reduces Flakieness with RetryFailedSteps plugin and a Webdriver's SmartWait

#### Page objects follow `<name_of_page>.page.js` naming pattern

#### Step Definitions files follows `<name_of_step>.steps.js` naming pattern



[1]: https://codecept.io/
[2]: https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Imperative+v.+Declarative+Testing+Scenarios
[3]: https://shouldjs.github.io/
