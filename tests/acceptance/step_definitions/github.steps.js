const { I, ghHomePage, ghSearchPage } = inject();

Given('Fred is on Github Homepage', () => {
  I.amOnPage('/');
});

When('he searches for the {string}', searchFor => {
  ghHomePage.search(searchFor);
});

Then('he is able to see the correct repository', async () => {
  let resultHref = await ghSearchPage.grabHrefForResult();
  resultHref[0].should.containEql('codeceptjs-quick-startsss', 'expected repository was not found');
});
