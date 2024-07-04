let originAutocomplete, destinationAutocomplete;

function initAutocomplete() {
    originAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('state1'), { types: ['geocode'] });
    destinationAutocomplete = new google.maps.places.Autocomplete(
        document.getElementById('state2'), { types: ['geocode'] });

    // Listen for the place_changed event on the autocompletes
    originAutocomplete.addListener('place_changed', () => getPlaceLatLng(originAutocomplete, 'origin'));
    destinationAutocomplete.addListener('place_changed', () => getPlaceLatLng(destinationAutocomplete, 'destination'));
}

function getPlaceLatLng(autocomplete, type) {
    const place = autocomplete.getPlace();
    if (place && place.geometry) {
        const location = place.geometry.location;
        if (type === 'origin') {
            window.originLatLng = location;
            localStorage.setItem('originLatLng', JSON.stringify(location));
        } else if (type === 'destination') {
            window.destinationLatLng = location;
            localStorage.setItem('destinationLatLng', JSON.stringify(location));
        }
    } else {
        alert('Place or geometry not found');
        console.error('Place or geometry not found');
    }
}

async function calculateDistance() {
    var originLatLng = JSON.parse(localStorage.getItem('originLatLng'));
    var destinationLatLng = JSON.parse(localStorage.getItem('destinationLatLng'));
    try {
        if (originLatLng && destinationLatLng) {
            const service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [originLatLng],
                    destinations: [destinationLatLng],
                    travelMode: 'DRIVING',
                },
                (response, status) => {
                    if (status === 'OK') {

                        const distanceValue = response.rows[0].elements[0].distance.value;
                        const distanceMeters = distanceValue; // Distance in meters
                        //let distance = document.getElementById('distance-result').innerText;
                        let calculateMiles = distanceMeters * 0.0006
                        let resultinMiles = calculateMiles.toFixed()
                        document.getElementById('distance-result').innerText = `${resultinMiles}`;
                       
                        if (resultinMiles) {
                            localStorage.setItem('distanceResult', resultinMiles);
                        } else {
                            localStorage.setItem('distanceResult', '0');
                        }

                    } else {
                        console.error('Distance Matrix request failed due to ' + status);
                    }
                }
            );
        } 
    } catch (error) {
        alert(error.message);
        console.error(error);    
    }
}

// Initialize the Autocomplete on window load
window.onload = initAutocomplete;
    