// this interface will allow any other Class to be able pass in to addMarker
// as long as it has location {} with lat and lng    This makes this scalable,
interface Mappable {
    location: {
        lat: number,
        lng: number
    },
    markerContent():string;      // requiring for markerContent() to be present to be consider mappable. 
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
    };

    addMarker(mappable: Mappable): void {
        const marker =new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent();
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}