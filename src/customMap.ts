import { User } from './User';
import { Company } from './Company';

// this interface will allow any other Class to be able pass in to addMarker
// as long as it has location {} with lat and lng    This makes this scalable,
interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
    // private modifier ensures we can not access this property outside of this class
    // making sure only functions defined in constructor() can be accessed in index.ts
    private googleMap:  google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })
    }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     })
    // }
}