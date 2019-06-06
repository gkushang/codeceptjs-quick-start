let conf = {
  helpers: {
    WebDriver: {
        browser: 'firefox',
        platform: 'macOS 10.13',
        version: '67.0'
    }
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['sauce'],
      user: process.env.SAUCE_USERNAME,
      key: process.env.SAUCE_KEY,
      region: 'us'
    }
  }
};

exports.conf = conf;