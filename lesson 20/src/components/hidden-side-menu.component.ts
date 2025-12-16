import { Locator } from 'playwright';
import { expect } from 'chai';

export class HiddenSideMenu {

    public get sideMenuMainList(): Locator {
        return this.baseLocator.locator('ul[class="list-unstyled text-dark"]');
    }

    public get sideMenuSecondaryList(): Locator {
        return this.baseLocator.locator('ul[class="list-unstyled mb-0 secondary-navigation--off-canvas"]');
    }

    private get subCategoryTitle(): Locator {
        return this.baseLocator.locator('div[class="off-canvas-header__heading"]');
    }

    public get closeMenuButton(): Locator {
        return this.baseLocator.locator('(//button[@aria-label="Close Меню"])[1]');
    }

    public get menuLogo(): Locator {
        return this.baseLocator.locator('img[class="logo-b2c logo"]');
    }

    public constructor(private readonly baseLocator: Locator) {}

    private getMainMenuItem(menuItem: string): Locator {
        return this.baseLocator.locator(`ul[class="list-unstyled text-dark"] a span:has-text("${menuItem}")`);
    }

    public async clickMainMenuItem(menuItem: string): Promise<void> {

        const mainMenuItem = this.getMainMenuItem(menuItem);
        await mainMenuItem.isVisible();
        await mainMenuItem.click();
    }

    public async verifyTitle(expectedTitle: string): Promise<void> {
        const text = await this.subCategoryTitle.textContent();
        console.log(text);

        expect(text).to.equal(expectedTitle);
    }

}
