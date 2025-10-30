export interface IVehicle {
    engineTurbo: boolean;
    defaultSpeed: number;
    specification: string;
    gearBox: number;
    isOn: boolean;
    maxSpeed: number;


    startEngine(): void;

    turnOffEngine(): void;

    drive(speedDeviation: number, place?: string): number;

}
