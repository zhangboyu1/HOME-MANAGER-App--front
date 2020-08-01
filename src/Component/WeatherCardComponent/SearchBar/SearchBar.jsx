import React from 'react';
import axios from "axios";
import Geocode from "react-geocode";
// import '../../App.scss';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tyCountry: '',
        }

        console.log(props)
    }

    typeCountry = (e) => {
        // console.log(e.target.value)
        const tyCountry = e.target.value
        this.setState(
            { tyCountry }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // SHould post user info to the server side to register and checked login
        let { tyCountry } = this.state
        console.log(tyCountry)

        Geocode.setApiKey("AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c");
        // set response language. Defaults to english.
        Geocode.setLanguage("en");
        Geocode.setRegion("es");

        Geocode.fromAddress(tyCountry).then(
            response => {
                console.log(response)
                const { lat, lng } = response.results[0].geometry.location;
                this.props.searchWeather(lat, lng)
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
                        <input type="search" name="gsearch" value={this.state.tyCountry} placeholder="Search cities.." onChange={this.typeCountry} />
                        <input className="submit" type="submit" value="submit" />
                    </form>
                </div>

            </>

        )
    }
}