const { I } = inject();

module.exports = {
  locators: {
    resultLink: 'div>h3>a.v-align-middle'
  },

  async grabHrefForResult() {
    return await I.grabAttributeFrom(this.locators.resultLink, 'href');
  }
};
