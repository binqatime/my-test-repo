import { IVehicle } from './abstraction/i-vehicle';

export class Lorry implements IVehicle{
    public engineTurbo: boolean;
    public defaultSpeed: number;
    public specification: string;
    public gearBox: number;
    public isOn: boolean;
    public maxSpeed: number;

    public constructor(public readonly mark: string) {
        this.engineTurbo = false;
        this.defaultSpeed = 50;
        this.gearBox = 6;
        this.specification = 'basic';
        this.isOn = false;
        this.maxSpeed = 90;
    }

    public startEngine(): void {
        console.log('Brr-brrr-brrr-dr');
        this.isOn = true;
        console.log(`The ${this.mark} is ready to go!`);
    }

    public turnOffEngine(): void {
        this.isOn = false;
        console.log('The vehicle is parked.');
    }

    public drive(place: string | 'city' | 'country' = 'city'): void {
        this.accelerate();
        if (place === 'city') {
            console.log('Vehicle is driving in the city, be careful');
            console.log(`Vehicle speed allowed is ${this.defaultSpeed}`);
        } else if (place === 'country') {
            console.log('Vehicle is driving in the countryside');
            console.log(`Vehicle speed may reach to ${this.maxSpeed}`);
        } else {
            console.log(`Speed is ${this.maxSpeed}. Make sure there are no cops!!`);
        }
    }

    private accelerate(): void {
        let gear = 0;
        while (gear < this.gearBox) {
            gear++;
            console.log(`Shifting to next gear: ${gear}`);
        }
    }

    public updateSpecification(speed?: number, turbo?: boolean): void  {
        speed !== undefined ? this.maxSpeed = speed : this.maxSpeed;
        turbo !== undefined ? this.engineTurbo = true : this.engineTurbo;
        this.specification = 'advanced';
        console.log(`Car has been updated, its specification is ${this.specification}, and its maximum speed is ${this.maxSpeed} and turbo set to: ${this.engineTurbo}`);
    }
}
