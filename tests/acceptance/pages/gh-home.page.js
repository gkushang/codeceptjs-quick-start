const { I } = inject();

module.exports = {
  locators: {
    searchBox: '[data-hotkey]'
  },

  search(searchFor) {
    I.fillField(this.locators.searchBox, searchFor);
    I.pressKey('Enter');
  }
};
