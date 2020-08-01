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


    handleSubmit = (event) => {
        event.preventDefault()
        // SHould post user info to the server side to register and checked login
        let { tyCountry } = this.state
        Geocode.setApiKey("AIzaSyCgPv2IvOtVdUX9VHX-oP5LS2i8TAeIs8c");
        Geocode.setLanguage("en");
        Geocode.setRegion("es");
        Geocode.fromAddress(tyCountry).then(
            response => {
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
                        <input type="text" name="gsearch" value={this.state.tyCountry} onChange={this.typeCountry} placeholder="Search Country..."></input>
                        <button type="submit">connect</button>
                    </form>
                </div>
            </>
        )
    }
}