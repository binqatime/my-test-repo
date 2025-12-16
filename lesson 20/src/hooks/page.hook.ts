import { After, Before } from '@cucumber/cucumber';
import { JyskWorld } from '../worlds/jysk.world.ts';

export function pageHook(): void {
    Before(async function(this: JyskWorld) {
        this.page = await this.context.newPage();
    });

    After(async function(this: JyskWorld) {
        await this.page.close();
    });
}
