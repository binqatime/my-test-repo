
export class ApiObjectClass {
    public name: string;
    public hair_color: string;
    public eye_color: string;
    public birth_year: string;

    public constructor(name: string, hair_color: string, eye_color: string, birth_year: string) {
        this.birth_year = birth_year;
        this.eye_color = eye_color;
        this.hair_color = hair_color;
        this.name = name;
    }


    public get name(): string {
        return this.name;
    };

    public set hair_color(newColor: string) {
        this.hair_color = newColor;
    }
}

