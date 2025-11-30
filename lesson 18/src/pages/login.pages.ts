import { Locator, Page } from '@playwright/test';

export class LoginPage {

    public constructor(private readonly page: Page) {}

    public get newCustomerBlockTitle(): Locator {
        return this.page.locator('div[class="section"]:has-text("Новий користувач")');
    }

    public get newCustomerBlockDescription(): Locator {
        return this.page.locator('div[class="description"]');
    }

    public get registeredCustomerBlockTitle(): Locator {
        return this.page.locator('div[class="section"]:has-text("Я вже зареєстрований")');
    }

    public get passwordField(): Locator {
        return this.page.locator('#lk-input-2fl8eryvpwr');
    }

    public get telephoneField(): Locator {
        return this.page.locator('#lk-phone-4rlztoadf5k');
    }

    // button name can be: 'Зареєструватись' or 'Увійти'
    public getLogInButton(buttonName: string): Locator {
        return this.page.locator(`button[class="btn btn-cyan"]:has-text("${buttonName}")`);
    }

    public get forgotPasswordLink(): Locator {
        return this.page.locator('div[class="existing__account"] a');
    }

}
