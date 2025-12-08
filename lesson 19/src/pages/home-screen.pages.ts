import { Page, Locator, expect } from '@playwright/test';
import { HiddenSideMenu } from '../components/hidden-side-menu.component';
import { SearchField } from 'src/components/search-field.component';

export class HomeScreenPage {


    public get openMenuButton(): Locator {
        return this.page.locator('div a[aria-label="Меню"]');
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

    private get welcomeTitle(): Locator {
        return this.page.locator('div[class="hero-banner--big-Image"] a img');
    }

    public hiddenSideMenuComponent: HiddenSideMenu;
    public searchFieldComponent: SearchField;

    public constructor(private readonly page: Page) {
        this.hiddenSideMenuComponent = new HiddenSideMenu(this.page.locator('div[class="off-canvas-content off-canvas-content--sticky hide-scrollbars"]'));
        this.searchFieldComponent = new SearchField(this.page.locator('div form'));
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        const text = await this.welcomeTitle.textContent();
        console.log(text);

        await expect(this.page).toHaveTitle(expectedTitle);
    }

    public async openSideMenu(): Promise<void> {
        await this.openMenuButton.click();
    }

    public async goToProfilePage(): Promise<void> {
        await this.profileButton.click();
    }

}
