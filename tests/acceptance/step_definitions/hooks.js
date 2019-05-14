const { I, pdHomePage } = inject();
const chai = require('chai');
const should = chai.should();

chai.use(function(_chai, _) {
  _chai.Assertion.addMethod('withMessage', function(msg) {
    _.flag(this, 'message', msg);
  });
});

Before(async () => {
  I.amOnPage('/#/');
});
