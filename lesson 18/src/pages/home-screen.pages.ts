import { Page, Locator, expect } from '@playwright/test';

export class HomeScreenPage {

    public constructor(private readonly page: Page) {}

    public get goToBasketButton(): Locator {
        return this.page.locator('#cart');
    }

    public get loginButton(): Locator {
        return this.page.locator('div[class="right-col"] a[class="login account-link"]');
    }

    public async goToBasketPage(): Promise<void> {
        await this.goToBasketButton.click();
    }

    public async goToLoginPage(): Promise<void> {
        await this.loginButton.click();
    }

    public get cartItemsCounter(): Locator {
        return this.page.locator('span[class="count"]');
    }

    public get searchField(): Locator {
        return this.page.locator('#search2');
    }

    private get welcomeTitle(): Locator {
        return this.page.locator('[class="container welcome"] h1');
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        const text = await this.welcomeTitle.textContent();
        console.log(text);

        await expect(this.page).toHaveTitle(expectedTitle);
    }

}
