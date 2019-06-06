let browsers = {
    chrome: {
        browser: 'chrome',
        platform: 'macOS 10.14',
        version: '74.0'

    },
    firefox: {
        browser: 'firefox',
        platform: 'macOS 10.13',
        version: '67.0'
    },
    safari: {
        browser: 'safari',
        platform: 'macOS 10.14',
        version: '12.0'
    },
    edge: {
        browser: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '16.16299'
    },
    ie: {
        browser: 'internet explorer',
        platform: 'Windows 10',
        version: '11.285'
    }
};

let conf = {
  helpers: {
    WebDriver: browsers[process.profile ? process.profile.split(':')[1] : 'chrome']
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
            chunks: 3,
            browsers: [
                browsers.chrome, browsers.edge, browsers.firefox
            ]
        },
    }
};

exports.conf = conf;