import { expect} from 'chai';
import { Car } from '../src/car';

describe('Unit tests for Car Class', () => {
    let car: Car;

    beforeEach( () => {
        car = new Car('Volvo');
        car.specification = 'basic';
    });

    describe('Start engine func test', () => {
        it('should start a car', () => {
            const isOn = car.startEngine();
            expect(isOn).to.equal(true);
        });

    });

    describe('Stop car', () => {
        it('should stop a car', () => {
            const isOn = car.turnOffEngine();
            expect(isOn).to.equal(false);
        });
    });

    describe('Drive a car', () => {
        it('Should drive a car a city', () => {
            car.drive(20, 'city');
            expect(car.defaultSpeed).to.equal(60);
        });
        it('Should drive a car in the country', () => {
            car.drive(20, 'country');
            expect(car.maxSpeed).to.equal(110);
        });
        it('Should drive a car somewhere else', () => {
            car.drive(20, 'elsewhere');
            expect(car.maxSpeed + 20).to.equal(130);
        });
    });

    describe('Upgrade car specifications', () => {
        it('Should update card specifications', () => {
            car.updateSpecification(140, true);
            expect(car.maxSpeed).to.equal(140);
            expect(car.engineTurbo).to.equal(true);
            expect(car.specification).to.equal('advanced');
        });
    });

    describe('No changes after upgrade', () => {
        it('Should remain as is if no parameters', () => {
            car.updateSpecification();
            expect(car.maxSpeed).to.equal(110);
            expect(car.engineTurbo).to.equal(false);
            expect(car.specification).to.equal('basic');
        });
    });

});


