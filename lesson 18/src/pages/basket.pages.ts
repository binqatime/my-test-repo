import { expect, Locator, Page } from '@playwright/test';

export class BasketPage {


    private get basketPageTitle(): Locator {
        return this.page.locator('div[class="container"] h1');
    }

    public get emptyBasketImage(): Locator {
        return this.page.locator('div[class="cart-empty-content"] img');
    }

    public get emptyBasketMessage(): Locator {
        return this.page.locator('div[class="cart-empty-content"] p');
    }

    public get backToHomePageButton(): Locator {
        return this.page.locator('div[class="cart-empty-content"] a');
    }

    public constructor(private readonly page: Page) {}

    public async goBackToHomePage(): Promise<void> {
        await this.backToHomePageButton.click();
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        const text = await this.basketPageTitle.textContent();
        console.log(text);

        await expect(this.page).toHaveTitle(expectedTitle);
    }

}
