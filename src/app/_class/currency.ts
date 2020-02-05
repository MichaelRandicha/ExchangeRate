export class Currency {
    name: string;
    description: string;
    rate: number;
    base: string;

    constructor(name: string, description: string, rate: number, base: string) {
        this.name = name;
        this.description = description;
        this.rate = rate;
        this.base = base;
    }
    
    compareName(currency: Currency) {
        if(this.name > currency.name) {
            return 1;
        } else if(this.name < currency.name) {
            return -1;
        } else {
            return 0;
        }
    }
}
