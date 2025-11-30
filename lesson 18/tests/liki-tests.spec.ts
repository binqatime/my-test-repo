import { test, expect } from '@playwright/test';
import { BasketPage } from 'src/pages/basket.pages';
import { HomeScreenPage } from 'src/pages/home-screen.pages';
import { LoginPage } from 'src/pages/login.pages';


test('Open Liki website home page', async ({ page }) => {
    await page.goto('https://liki24.com/uk/');

    const homePage = new HomeScreenPage(page);

    await homePage.verifyTitle('Пошук ліків в аптеках Києва та України — доставка ліків додому');
    await expect(homePage.searchField).toBeVisible();
    await expect(homePage.goToBasketButton).toBeVisible();
    await expect(homePage.cartItemsCounter).toHaveText('0');
});

test('Open and verify empty basket state', async ({ page }) => {
    const homePage = new HomeScreenPage(page);
    const basketPage = new BasketPage(page);

    await page.goto('https://liki24.com/uk/');
    await homePage.goToBasketPage();
    await basketPage.verifyTitle('Кошик');
    await expect(basketPage.emptyBasketImage).toBeVisible();
    await expect(basketPage.emptyBasketMessage).toHaveText('Ваш кошик порожній');
    await expect(basketPage.backToHomePageButton).toBeVisible();

    basketPage.goBackToHomePage();
});

test('Open login page', async ({ page }) => {
    const homePage = new HomeScreenPage(page);
    const loginPage = new LoginPage(page);

    await page.goto('https://liki24.com/uk/');
    await homePage.goToLoginPage();

    await expect(loginPage.newCustomerBlockTitle).toBeVisible();
    await expect(loginPage.newCustomerBlockDescription).toHaveText('Створення облікового запису дозволить вам відслідковувати статус замовлень, накопичувати бонуси і отримувати знижки!');
    await expect(loginPage.getLogInButton('Зареєструватись').isVisible());
});
