import axios from "axios";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c");
Geocode.setLanguage("en");
Geocode.setRegion("es");
const proxy = 'https://cors-anywhere.herokuapp.com/';

export const searchPlaceDetails = (_tyCountry) => {
    return Geocode.fromAddress(_tyCountry).then(
        response => {
            const place_id = response.results[0].place_id;
            const { lat, lng } = response.results[0].geometry.location;
            return {
                latitude: lat,
                longitude: lng,
                placeId: place_id
            }
        },
        error => {
            console.error(error);
        }
    )
}


export const SearchPhotoReference = (..._reference) => {
    const { latitude, longitude, placeId } = _reference[0]
    const ApiDetialsLink = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c`
    return axios({
        method: 'get',
        url: proxy + ApiDetialsLink,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then((response) => {
        const { photo_reference } = response.data.result.photos[0]
        return {
            latitude: latitude,
            longitude: longitude,
            placeRef: photo_reference
        }
    })
}



export const SearchCityPhot = (..._photo) => {
    const { latitude, longitude, placeRef } = _photo[0]
    const ApiPlacePhotLink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxHeight=300&photoreference=${placeRef}&key=AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c`
    return axios({
        method: 'get',
        url: proxy + ApiPlacePhotLink,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then((response) => {
        Object.values(response.headers).forEach(item => {
            if (item.search('https') !== -1) {
                _photo[0].url = item
            }
        })
        return {
            latitude: latitude,
            longitude: longitude,
            placeUrl: _photo[0].url
        }
    })
}
