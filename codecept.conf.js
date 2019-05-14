const selenium = require('selenium-standalone');
let debug = require('debug')('acceptance:config');
const DEFAULT_HOST = 'https://github.com/';
const RELATIVE_PATH = './tests/acceptance/';
const HOST = process.env.CODECEPT_HOST
  ? process.env.CODECEPT_HOST
  : DEFAULT_HOST;

const webDriver = {
  url: HOST,
  browser: process.profile || 'chrome',
  smartWait: 5000,
  waitForTimeout: 10000,
  coloredLogs: true,
  timeouts: {
    implicit: 5000,
    script: 60000,
    'page load': 10000
  }
};

const headlessCaps = {
  chromeOptions: {
    args: ['--headless', '--disable-gpu', '--window-size=800,600']
  }
};

const conf = {
  output: RELATIVE_PATH + 'report',
  cleanup: true,
  coloredLogs: true,
  helpers: {
    REST: {},
    Faker: {
      require: RELATIVE_PATH + 'helpers/faker-helper.js'
    },
    Protractor_commands: {
      require: RELATIVE_PATH + 'helpers/protractor-commands-helper.js'
    }
  },
  gherkin: {
    features: RELATIVE_PATH + 'features/*.feature',
    steps: [
      RELATIVE_PATH + 'step_definitions/github.steps.js',
      RELATIVE_PATH + 'step_definitions/hooks.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    autoDelay: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false,
      retries: 5
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['chrome']
    },
    multibrowsers: {
      chunks: 2,
      browsers: ['firefox', 'chrome']
    },
    smoke: {
      grep: '@smoke',
      browsers: ['chrome']
    }
  },
  include: {
    I: '.tests/acceptance/steps.js',
    ghHomePage: RELATIVE_PATH + 'pages/gh-home.page.js',
    ghSearchPage: RELATIVE_PATH + 'pages/gh-search.page.js'
  },
  tests: RELATIVE_PATH + '/specs/*.spec.js',
  name: 'acceptance'
};

conf.helpers.WebDriver = webDriver;

if (process.env.CODECEPT_ENV && process.env.CODECEPT_ENV === 'headless') {
  debug('running tests on "Headless" browser');
  conf.helpers.WebDriver.capabilities = headlessCaps;
}

exports.config = conf;
