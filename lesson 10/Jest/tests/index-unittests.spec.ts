import { Garage } from '../src/index';
import { Car } from '../src/car';
import { expect} from 'chai';
import { Lorry } from '../src/lorry';

describe('Unit tests for index', () => {
    let garage: Garage;

    beforeEach( () => {
        garage = new Garage('Home garage');
    });

    describe('Drive vehicles from garage', () => {
        it('drive a car from garage', () => {
            const car = new Car('Reno');
            garage.driveVehicle(car);
            expect(car.defaultSpeed).to.equal(60);
            expect(car.isOn).to.equal(false);
        });

        it('drive a lorry from garage', () => {
            const lorry = new Lorry('Iveco');
            garage.driveVehicle(lorry);
            expect(lorry.defaultSpeed).to.equal(50);
            expect(lorry.isOn).to.equal(false);
        });

    });

});


