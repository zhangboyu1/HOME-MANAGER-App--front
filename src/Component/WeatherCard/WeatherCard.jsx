
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAlignJustify } from '@fortawesome/free-brands-svg-icons';
import {
    faPlay,
    faCloudRain,
    faSun,
    faPooStorm,
    faCloudSun
} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import CurrentWeather from '../WeatherCardComponent/CurrentWeatherInfo/CurrentWeather';
import Details from '../WeatherCardComponent/Details/Details';
import SearchBar from '../WeatherCardComponent/SearchBar/SearchBar'
import PropTypes from 'prop-types'
import './WeatherCard.css'
import { searchWeather } from '../Store/DarkSkyService'
const defaultUrl = 'http://hdwpro.com/wp-content/uploads/2018/07/Cool-Paris-Wallpaper.jpg'

export default class WeatherCard extends React.Component {

    constructor() {
        super()
        this.state = {
            photoUrl: '',
            ifSearching: false
        }

        setTimeout(() => {
            this.searchW()
        }, 10000);
    }

    //Decide to send request on this father Component!
    searchW = (_latitude, _longitude, _ifSearching) => {
        const { firsLoading } = this.props
        this.firstLoading = firsLoading
        if (this.firstLoading || _ifSearching) {
            console.log(`Can we start to request?`)
            this.SearchWeatherInfo(_latitude, _longitude)
        }
    }

    async SearchWeatherInfo(__latitude, __longitude, _ifSearching) {
        const { updateWeatherData } = this.props
        const isSearch = await searchWeather(__latitude, __longitude)
        if (isSearch) {
            this.firsLoading = false
            const { currently, timezone, daily } = isSearch
            updateWeatherData(this.firsLoading, [currently], timezone, daily)
            setTimeout(() => {
                this.ifSearch('')
            }, 3000)
        }
    }

    getPhotoUrl = (_updatedPhotoUrl) => {
        this.props.getPhotoUrl(_updatedPhotoUrl)
    }

    ifSearch = (_ifSearching) => {
        this.setState({
            ifSearching: (_ifSearching === 'photo') ? true : false
        })
    }

    render() {
        const { firsLoading, currently, daily, timeZone, photoUrl = defaultUrl } = this.props
        const { ifSearching } = this.state
        return (
            <>
                <div className="cardFrame">
                    <div className="card_weather">
                        <CurrentWeather currently={currently ? currently : ''} timeZone={timeZone ? timeZone : ''} photoUrl={photoUrl} />
                        <Details daily={daily} />
                        {
                            (ifSearching || firsLoading) ?
                                <div id="loader-wrapper">
                                    <div id="loader"></div>
                                </div> : ''
                        }
                        <SearchBar searchWeather={this.searchW} getPhotoUrl={this.getPhotoUrl} ifSearch={this.ifSearch} />
                    </div>
                </div>
            </>

        )
    }
}

WeatherCard.defaultProps = {
    firsLoading: PropTypes.string.isRequired,
    currently: PropTypes.array.isRequired,
    daily: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
}

WeatherCard.defaultProps = {
    photoUrl: defaultUrl,
};