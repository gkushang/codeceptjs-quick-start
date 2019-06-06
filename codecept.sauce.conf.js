let browsers = {
    chrome: {
        browserName: 'chrome',
        platformName: 'macOS',
        platformVersion: '10.14'
    },
    firefox: {
        browser: 'firefox',
        platformName: 'Windows 10',
        platformVersion: '67.0'
    },
    safari: {
        browser: 'safari',
        platformName: 'macOS 10.14',
        platformVersion: '12.0'
    },
    edge: {
        browser: 'MicrosoftEdge',
        platformName: 'Windows 10',
        platformVersion: '16.16299'
    },
    ie: {
        browser: 'internet explorer',
        platformName: 'Windows 10',
        platformVersion: '11.285'
    }
};

function getBrowsers() {
    if (process.profile) {
        console.log('process.profile::: ', process.profile);
        let multibrowsers = [];
        let sauceBrowsers = process.profile.split(':')[1].split(',');
        console.log('sauceBrowsers::: ', sauceBrowsers);
        sauceBrowsers.forEach(browser => {
            multibrowsers.push(browsers[browser]);
        });
        console.log('multibrowsers::: ', multibrowsers);
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