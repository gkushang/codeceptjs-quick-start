let debug = require('debug')('acceptance:sauce:config');

let browsers = {
    chrome: {
        browser: 'chrome',
        // add more configuration for Saucelabs platform
    },
    firefox: {
        browser: 'firefox',
    },
    safari: {
        browser: 'safari',
    },
    edge: {
        browser: 'MicrosoftEdge',
    },
    ie: {
        browser: 'internet explorer',
    }
};

function getBrowsers() {
    if (process.profile) {
        let multibrowsers = [];
        let sauceBrowsers = process.profile.split(':')[1].split(',');
        debug('requested multibrowsers:', sauceBrowsers);
        sauceBrowsers.forEach(browser => {
            multibrowsers.push(browsers[browser]);
        });
        debug('multibrowsers saucelabs conf:', multibrowsers);
        return multibrowsers;
    }

    return [browsers.chrome];
}

let conf = {
  helpers: {
    WebDriver: getBrowsers()[0]
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['sauce'],
      user: process.env.SAUCE_USERNAME,
      key: process.env.SAUCE_KEY,
      region: 'us'
    }
  },
  multiple: {
      multibrowsers: {
          chunks: getBrowsers().length,
          browsers: getBrowsers()
        },
    }
};

exports.conf = conf;