import { IVehicle } from './abstraction/i-vehicle';
import { Car } from './car';
import { Lorry } from './lorry';

class Garage {
    public constructor(public readonly name: string) {};

    public driveVehicle(vehicle: IVehicle): void {
        vehicle.startEngine();
        vehicle.drive(20);
        vehicle.turnOffEngine();
    };

}

const myGarage = new Garage('Home garage');
const car = new Car('Nissan');
const lorry = new Lorry('Volvo');


console.log('--------------');
myGarage.driveVehicle(car);
console.log(car.updateSpecification(130, true));

console.log('Got new car');
lorry.updateSpecification(120);

myGarage.driveVehicle(lorry);


