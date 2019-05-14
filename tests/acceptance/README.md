# media-manager acceptance tests

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

[1]: https://codecept.io/
