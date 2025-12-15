import { Locator, Page } from 'playwright';
import { expect } from 'chai';

export class BasePage {

    public get searchResultContainerTitle(): Locator {
        return this.page.locator('div[class="tabbed-search__content container"] h1');
    }

    public get cookieAcceptButton(): Locator {
        return  this.page.locator('#onetrust-accept-btn-handler');
    }

    public constructor(private readonly page: Page) {}

    public async openWebPage(): Promise<void> {
        await this.page.goto('https://jysk.ua/');
        expect(this.page.url()).contain('jysk.ua');
    }

    public async verifyResults(expectedText: string): Promise<void> {
        const text = await this.searchResultContainerTitle.textContent();
        console.log(text);

        await expect(text).to.equal(expectedText);
    }
}
