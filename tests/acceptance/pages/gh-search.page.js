const { I } = inject();

module.exports = {
  locators: {
    resultLink: 'li.repo-list-item>div>h3>a',
    description: 'p.col-12.col-md-9.d-inline-block',
    updateInfo: 'p.f6.text-gray'
  },

  async grabHrefForResult() {
    return await I.grabAttributeFrom(this.locators.resultLink, 'href');
  },

  async grabDescription() {
    return await I.grabTextFrom(this.locators.description);
  },

  async grabUpdateInfo() {
    return await I.grabTextFrom(this.locators.updateInfo);
  }
};
