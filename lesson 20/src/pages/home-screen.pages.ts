import { Page, Locator } from 'playwright';
import { HiddenSideMenu } from '../components/hidden-side-menu.component.ts';
import { SearchField } from '../components/search-field.component.ts';
import { expect } from 'chai';

export class HomeScreenPage {


    public get openMenuButton(): Locator {
        return this.page.locator('div a[aria-label="Меню"]');
    }

    public get webSiteLogoImage(): Locator {
        return this.page.locator('div[class="logo-wrapper my-3 my-md-5"] img');
    }

    public get profileButton(): Locator {
        return this.page.locator('#profile-link');
    }

    public get basketButton(): Locator {
        return this.page.locator('//div[not(@style="display:none")]/a[@data-test="miniBasketButton"]');
    }

    public get searchField(): Locator {
        return this.page.locator('#search2');
    }

    public get wishListButton(): Locator {
        return this.page.locator('#wishlist-link');
    }

    public get mainBannerImage(): Locator {
        return this.page.locator('div[class="hero-banner--big-Image"] a img');
    }

    private get categoryGridTitle(): Locator {
        return this.page.locator('div[class="frontpage-category-grid"] h2');
    }

    public hiddenSideMenuComponent: HiddenSideMenu;
    public searchFieldComponent: SearchField;

    public constructor(private readonly page: Page) {
        this.hiddenSideMenuComponent = new HiddenSideMenu(this.page.locator('div[class="off-canvas-content off-canvas-content--sticky hide-scrollbars"]'));
        this.searchFieldComponent = new SearchField(this.page.locator('div form'));
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        const text = await this.categoryGridTitle.textContent();
        console.log(text);

        await expect(text).to.equal(expectedTitle);
    }

    public async openSideMenu(): Promise<void> {
        await this.openMenuButton.click();
    }

    public async goToProfilePage(): Promise<void> {
        await this.profileButton.click();
    }

}
