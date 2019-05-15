const { I, pdHomePage } = inject();
const should = require('should');

Before(async () => {
  I.amOnPage('/#/');
});
