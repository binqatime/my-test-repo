import { Locator } from '@playwright/test';

export class SearchField {

    public get searchInputField(): Locator {
        return this.baseLocator.locator('input[type="search"]');
    }

    private get searchSubmitButton(): Locator {
        return this.baseLocator.locator('button[data-test="submitbutton"]');
    }

    public get searchResultContainerTitle(): Locator {
        return this.baseLocator.locator('div[class="tabbed-search__content container"] h1');
    }

    public constructor(private readonly baseLocator: Locator) {}

    public async searchForAProduct(searchText: string): Promise<void> {

        await this.searchInputField.fill(searchText);
        await this.searchSubmitButton.press('Enter');
    }

}
