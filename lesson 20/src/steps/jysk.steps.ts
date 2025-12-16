import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from 'chai';
import { JyskWorld } from 'src/worlds/jysk.world.ts';


Given('the user opens Jysk website and accepts cookies', async function(this: JyskWorld) {
    await this.basePage.openWebPage();
    await this.basePage.cookieAcceptButton.click();
});

When('user observes the home page', async function(this: JyskWorld) {
    await expect(this.webSiteLogoImage).not.to.be.NaN;
});

Then('user sees the main title', async function(this: JyskWorld) {
    await this.homeScreenPage.verifyTitle('Категорії товарів');
    await expect(this.homeScreenPage.mainBannerImage).to.exist;
});

When('user opens the menu', async function(this: JyskWorld) {
    await this.homeScreenPage.openSideMenu();
    await expect(this.homeScreenPage.hiddenSideMenuComponent.menuLogo).to.exist;
    await expect(this.homeScreenPage.hiddenSideMenuComponent.sideMenuMainList).to.exist;
});

When('user clicks on {string} category', async function(this: JyskWorld, menuItem: string) {
    await this.homeScreenPage.hiddenSideMenuComponent.clickMainMenuItem(menuItem);
});

Then('user sees the {string} category', async function(this: JyskWorld, categoryName: string) {
    await this.homeScreenPage.hiddenSideMenuComponent.verifyTitle(categoryName);
});

When('user types {string} into the search field and presses enter', async function(this: JyskWorld, searchInput: string) {
    await this.homeScreenPage.searchFieldComponent.searchForAProduct(searchInput);
});

Then('user sees the page with the following results {string}', async function(this: JyskWorld, results: string) {
    await this.basePage.verifyResults(results);
});
