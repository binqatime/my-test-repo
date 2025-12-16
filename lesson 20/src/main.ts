import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { JyskWorld } from './worlds/jysk.world.ts';

setDefaultTimeout(999999999);
setWorldConstructor(JyskWorld);
