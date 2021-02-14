import faker from 'faker';
import { Mappable } from './customMap';

// implemants Mappable ensures all instances of User sattisfies all the properties of mappable interface.
// this will give error id location or markerContent() is missing for any User instance.
// implement is optional. It helps ensure this class is compatable with Mappable interface
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <h1>User name is: ${this.name}</h1>
        `
    }
};