export class Persona {
    constructor(
        public name: string,
        public lastname: string,
        public age: number,
        private salarioBruto:number
    ) {

    }
    getFullName(): string {
        return `${this.name} ${this.lastname}`;
    }

    getAgeInYears(years: number): number {
        return this.age + years;
    }
}