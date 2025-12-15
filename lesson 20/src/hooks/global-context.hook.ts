import { BeforeAll } from '@cucumber/cucumber';
import { JyskWorld } from '../worlds/jysk.world.ts';

export function globalContextHook(): void {
    BeforeAll(function() {
        JyskWorld.globalContext = new Map();
    });
}
