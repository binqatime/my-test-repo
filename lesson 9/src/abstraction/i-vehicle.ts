export interface IVehicle {
    engineTurbo: boolean;
    defaultSpeed: number;
    specification: string;
    gearBox: number;
    isOn: boolean;
    maxSpeed: number;


    startEngine(): void;

    turnOffEngine(): void;

    drive(place?: string): void;

}
