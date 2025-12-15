import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { JyskWorld } from '../worlds/jysk.world.ts';

export function browserHook():void {
    BeforeAll(async function() {
        JyskWorld.browser = await chromium.launch({ headless: false });

    });


    AfterAll(async function() {
        await JyskWorld.browser.close();
    });
}
