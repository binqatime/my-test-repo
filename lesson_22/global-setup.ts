import { chromium } from '@playwright/test';

async function globalSetup(): Promise<void> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page  = await context.newPage();
    await page.goto('https://jysk.ua/');
    await page.locator('#onetrust-accept-btn-handler').click();


    await page.context().storageState({path: './cookie.json'});

    await browser.close();
}

export default globalSetup;
