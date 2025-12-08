import { test, expect } from '@playwright/test';
import { BasePage } from 'src/pages/base.pages';
import { HomeScreenPage } from 'src/pages/home-screen.pages';


test('Open Jysk website home page', async ({ page }) => {
    await page.goto('https://jysk.ua/');

    const homePage = new HomeScreenPage(page);

    await homePage.verifyTitle('JYSK | Купити меблі для оселі – Завжди чудові пропозиції ✓');
    await expect(homePage.openMenuButton).toBeVisible();
    await expect(homePage.basketButton).toBeVisible();
    await expect(homePage.profileButton).toBeVisible();
    await expect(homePage.searchFieldComponent.searchInputField).toBeVisible();
});

test('Open and select a Side Menu category', async ({ page }) => {
    const homePage = new HomeScreenPage(page);
    await page.goto('https://jysk.ua/');

    await homePage.openSideMenu();
    await expect(homePage.hiddenSideMenuComponent.menuLogo).toBeVisible();
    await expect(homePage.hiddenSideMenuComponent.sideMenuMainList).toBeVisible();
    await homePage.hiddenSideMenuComponent.clickMainMenuItem('Офіс');
    await homePage.hiddenSideMenuComponent.verifyTitle('Офіс');
});

test('Search for a product', async ({ page }) => {
    const homePage = new HomeScreenPage(page);
    const basePage = new BasePage(page);

    await page.goto('https://jysk.ua/');
    expect(homePage.searchFieldComponent.searchForAProduct('стіл'));
    await expect(basePage.searchResultContainerTitle).toHaveText('769 результатів для: стіл');
});
