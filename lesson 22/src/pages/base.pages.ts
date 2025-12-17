import { expect, Locator, Page } from '@playwright/test';

export class BasePage {

    public get searchResultContainerTitle(): Locator {
        return this.page.locator('div[class="tabbed-search__content container"] h1');
    }

    public constructor(private readonly page: Page) {}

    public async getSearchResult(): Promise<string> {
        const result = await this.searchResultContainerTitle.textContent();
        return result as string;
    }

    public async openWebPage(): Promise<void> {
        await this.page.goto('https://jysk.ua/');
        expect(this.page.url()).toContain('jysk.ua');
    }
}
