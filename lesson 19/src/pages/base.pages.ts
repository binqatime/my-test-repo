import { Locator, Page } from '@playwright/test';

export class BasePage {

    public get searchResultContainerTitle(): Locator {
        return this.page.locator('div[class="tabbed-search__content container"] h1');
    }

    public constructor(private readonly page: Page) {}
}
