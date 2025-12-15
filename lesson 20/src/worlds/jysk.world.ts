import { IWorldOptions, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { BasePage } from '../pages/base.pages.ts';
import { HomeScreenPage } from '../pages/home-screen.pages.ts';

export class JyskWorld extends World {
    [x: string]: any;
    public static globalContext: Map<string, unknown> = new Map<string, unknown> ();

    // we can create a context class that will have its set and get methods for better readability
    public scenarioContext: Map<string, unknown>;

    public static browser: Browser;
    public context!: BrowserContext;
    public page!: Page;

    public get browser(): Browser {
        return JyskWorld.browser;
    }

    public get globalContext(): Map<string, unknown> {
        return JyskWorld.globalContext;
    }

    // pages getters
    public get basePage(): BasePage {
        if (!this._basePage) {
            this._basePage = new BasePage(this.page);
        }
        return this._basePage;
    }

    public get homeScreenPage(): HomeScreenPage {
        if (!this._homeScreenPage) {
            this._homeScreenPage = new HomeScreenPage(this.page);
        }
        return this._homeScreenPage;
    }

    // pages
    private _basePage: BasePage | undefined;
    private _homeScreenPage: HomeScreenPage | undefined;


    public constructor(options: IWorldOptions) {
        super(options);
        this.scenarioContext = new Map<string, unknown>();
    }
}
