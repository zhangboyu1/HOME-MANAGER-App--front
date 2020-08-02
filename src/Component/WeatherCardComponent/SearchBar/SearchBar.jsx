import React from 'react';
import axios from "axios";
import Geocode from "react-geocode";
import './searchBar.css';
export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tyCountry: '',
        }
    }


    typeCountry = (e) => {
        // console.log(e.target.value) 
        const tyCountry = e.target.value
        this.setState(
            { tyCountry }
        )
    }



    searchPlaceDetails = (place_id) => {
        // this.setState({ keepLoading: true })
        console.log("Start to search the place Details..............")
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const ApiDetialsLink = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c`
        // const axios = require('axios')
        axios({
            method: 'get',
            url: proxy + ApiDetialsLink,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }).then((response) => {
            console.log('Now the city detials can be retrived:')
            // console.log(response)
            // console.log(response.data.result.photos[0].photo_reference)
            const photo_reference = response.data.result.photos[0].photo_reference
            this.SearchCityPhot(photo_reference)

        })
    }


    SearchCityPhot = (photo_reference) => {
        console.log("Start to search the place pphotos..............")
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const ApiPlacePhotLink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxHeight=300&photoreference=${photo_reference}&key=AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c`
        // const axios = require('axios')
        axios({
            method: 'get',
            url: proxy + ApiPlacePhotLink,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }).then((response) => {
            console.log('Now the city photo-URL can be retrived:')
            console.log(Object.values(response.headers)[14])
            const photoUrl = Object.values(response.headers)[14]
            this.props.getPhotoUrl(photoUrl)


        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        let { tyCountry } = this.state
        let ifSearching = false
        Geocode.setApiKey("AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c");
        Geocode.setLanguage("en");
        Geocode.setRegion("es");
        Geocode.fromAddress(tyCountry).then(
            response => {
                // console.log(response.results)
                // console.log(response.results[0].place_id) //Now we get the place ID, then next we need to get the img url from API
                const place_id = response.results[0].place_id;

                console.log(place_id)
                this.searchPlaceDetails(place_id)
                const { lat, lng } = response.results[0].geometry.location;
                ifSearching = true
                this.props.searchWeather(lat, lng, ifSearching)
                //Then we try another Api GET caLL Here: 
            },

            error => {
                console.error(error);
            }
        )

    }




    render() {
        return (
            <>
                <div className="searchBar">
                    <form className="searchBar-form" action='/' onSubmit={this.handleSubmit}>
                        <input type="text" name="gsearch" value={this.state.tyCountry} onChange={this.typeCountry} placeholder="Search Country..."></input>
                        <button type="submit">connect</button>
                    </form>
                </div>
            </>
        )
    }
}