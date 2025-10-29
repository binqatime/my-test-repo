import { IVehicle } from './abstraction/i-vehicle';
import { Car } from './car';
import { Lorry } from './lorry';
import { MiniVan } from './mini-van';

class Garage {
    public constructor(public readonly name: string) {};

    public driveVehicle(vehicle: IVehicle): void {
        vehicle.startEngine();
        vehicle.drive();
        vehicle.turnOffEngine();
    };

}

const myGarage = new Garage('Home garage');
const car = new Car('Nissan');
const lorry = new Lorry('Volvo');
const van = new MiniVan('Mercedes');


console.log('--------------');
myGarage.driveVehicle(car);

console.log('Got new car');
lorry.updateSpecification(120);

myGarage.driveVehicle(lorry);

console.log('Got new car');
van.updateSpecification(140, true);
myGarage.driveVehicle(van);

