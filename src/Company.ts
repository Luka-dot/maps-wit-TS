import faker from 'faker';
import { Mappable } from './customMap';

// implemants Mappable ensures all instances of Company sattisfies all the properties of mappable interface.
// this will give error id location or markerContent() is missing for any Company instance.
// implement is optional. It helps ensure this class is compatable with Mappable interface
export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number,
        lng: number
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()), 
            lng: parseFloat(faker.address.longitude())
        } 
    }

    markerContent(): string {
        return `
            <div>
                <h1>Business name: ${this.companyName}</h1>
                <h2>Catchpharase: ${this.catchPhrase}</h2>
            </div>
            `
    }
}