import { After, Status } from '@cucumber/cucumber';
import { JyskWorld } from '../worlds/jysk.world.ts';

export function attachResultsHook(): void {
    After(async function (this: JyskWorld, { result }) {
        if (!result) {
            return;
        }

        await this.attach(`Status: ${result.status}. Duration: ${result.duration.seconds}s`);

        if (result.status === Status.PASSED) {
            return;
        }

        if (this.page) {
            const screenshot = await this.page.screenshot();
            await this.attach(screenshot, 'image/png');
        }
    });
}
