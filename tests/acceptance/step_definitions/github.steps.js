const { I, ghHomePage, ghSearchPage } = inject();

Given('Fred is on Github Homepage', () => {
  I.amOnPage('/');
});

When('he searches for the {string}', searchFor => {
  ghHomePage.search(searchFor);
});

Then('he is able to see the {string} in search results', async (result) => {

  // verify Element Attribute
  (await ghSearchPage.grabHrefForResult())[0].should.containEql(result);
});

Then('he sees all the detailed highlighted results including description or last update info and many more', 
  async () => {

    // verify Partial Text
    (await ghSearchPage.grabDescription()).trim().should.equal('Quick Start for CodeceptJS Acceptance Tests');

    // verify Complete Text
    (await ghSearchPage.grabUpdateInfo()).trim().should.containEql('Updated');
});
