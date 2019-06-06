let debug = require('debug')('acceptance:config');

const DEFAULT_HOST = 'https://github.com';
const RELATIVE_PATH = './tests/acceptance/';
const PAGES_PATH = RELATIVE_PATH + 'pages/';
const STEPS_PATH = RELATIVE_PATH + 'step_definitions/';

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

const sauceDriver = {
  url: HOST,
  browser: "chrome",
  host: "ondemand.saucelabs.com",
  port: 443,
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_KEY
}

const headlessCaps = {
  chromeOptions: {
    args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
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
    features: RELATIVE_PATH + 'features/**/*.feature',
    steps: [
      STEPS_PATH + 'search/github.steps.js',
      STEPS_PATH + 'hooks.js'
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
    ghHomePage: PAGES_PATH + 'github/gh-home.page.js',
    ghSearchPage: PAGES_PATH + 'github/gh-search.page.js'
  },
  name: 'Github Acceptance Tests'
};

conf.helpers.WebDriver = webDriver;

if (process.env.CODECEPT_DRIVER === 'headless') {
    debug('running tests on "Headless" browser');
    conf.helpers.WebDriver.capabilities = headlessCaps;
} else if ( process.env.CODECEPT_DRIVER === 'sauce') {   
    debug('running tests on Sauce Labs');
    conf.helpers.WebDriver = sauceDriver;
}

exports.config = conf;