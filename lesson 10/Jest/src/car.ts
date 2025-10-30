import { IVehicle } from './abstraction/i-vehicle';

export class Car implements IVehicle {

    public engineTurbo: boolean;
    public defaultSpeed: number;
    public specification: string;
    public gearBox: number;
    public isOn: boolean;
    public maxSpeed: number;

    public constructor(public readonly mark: string) {
        this.engineTurbo = false;
        this.defaultSpeed = 60;
        this.gearBox = 5;
        this.specification = 'basic';
        this.isOn = false;
        this.maxSpeed = 110;
    }

    public startEngine(): boolean {
        console.log('Brr-brrr-brrr-dr');
        console.log(`The ${this.mark} is ready to go!`);
        return this.isOn = true;
    }

    public turnOffEngine(): boolean {
        this.isOn = false;
        console.log('The vehicle is parked.');
        return this.isOn;
    }

    public drive(speedDeviation: 20, place: string | 'city' | 'country' = 'city'): number {
        this.accelerate();
        const speed = speedDeviation;
        if (place === 'city') {
            console.log('Vehicle is driving in the city, be careful');
            console.log(`Vehicle speed allowed is ${this.defaultSpeed}`);
            return this.defaultSpeed;
        } else if (place === 'country') {
            console.log('Vehicle is driving in the countryside');
            console.log(`Vehicle speed may reach to ${this.maxSpeed}`);
            return this.maxSpeed;
        } else {
            const moreSpeed = this.maxSpeed + speed;
            console.log(`Speed is ${moreSpeed}. Make sure there are no cops!!`);
            return moreSpeed;
        }
    }

    private accelerate(): void {
        let gear = 0;
        while (gear < this.gearBox) {
            gear++;
            console.log(`Shifting to next gear: ${gear}`);
        }
    }

    public updateSpecification(speed?: number, turbo?: boolean): string  {
        speed !== undefined ? this.maxSpeed = speed : this.maxSpeed;
        turbo !== undefined ? (this.engineTurbo = true, this.specification = 'advanced') : (this.engineTurbo, this.specification);
        console.log(`Car has been updated, its specification is ${this.specification}, and its maximum speed is ${this.maxSpeed} and turbo set to: ${this.engineTurbo}`);
        return this.specification;
    }

}

