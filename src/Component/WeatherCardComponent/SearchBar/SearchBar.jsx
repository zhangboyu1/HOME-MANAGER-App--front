import React from 'react';
import './searchBar.css';
import { searchPlaceDetails, SearchPhotoReference, SearchCityPhot } from '../../Store/GoogleService'



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tyCountry: '',
        }
    }

    typeCountry = (e) => {
        const tyCountry = e.target.value
        this.setState(
            { tyCountry }
        )
    }

    async searchPhoto(_tyCountry) {
        let ifSearching = true
        const isDetails = await searchPlaceDetails(_tyCountry)
        if (isDetails) {
            const { latitude, longitude } = isDetails
            this.props.searchWeather(latitude, longitude, ifSearching)
        }
        const isReference = await SearchPhotoReference(isDetails)
        const isPhotoUrl = await SearchCityPhot(isReference)
        isPhotoUrl && this.props.getPhotoUrl(isPhotoUrl.placeUrl)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.ifSearch('photo')
        let { tyCountry } = this.state
        this.searchPhoto(tyCountry)
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