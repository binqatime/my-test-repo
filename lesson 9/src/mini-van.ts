import { Lorry } from './lorry';

export class MiniVan extends Lorry {
    public seatNumber: number;
    public constructor(public readonly mark: string) {
        super(mark);
        this.seatNumber = 8;
        this.maxSpeed = 130;
    }

    private collectPassengers(): void {
        let passenger = 1;

        while (passenger < this.seatNumber) {

            passenger++;
        }
        console.log('We are loaded.');
    }

    public set speed(speed: number) {
        this.maxSpeed = speed;
    }

    private uberToOdesa(place: string): void {
        this.collectPassengers();
        super.startEngine();
        super.drive(place);
        super.turnOffEngine();
        console.log('We are in Odesa!');
    }

    public drive(place: 'city' | 'country' | 'high-way'): void {
        place = 'high-way';
        this.uberToOdesa(place);
    }
}
