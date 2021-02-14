export class CustomMap {
    // private modifier ensures we can not access this property outside of this class
    // making sure only functions defined in constructor() can be accessed in index.ts
    private googleMap:  google.maps.Map;

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById("map"), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}