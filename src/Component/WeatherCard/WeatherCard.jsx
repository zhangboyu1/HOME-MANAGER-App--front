
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
import Clock from '../Clock/Clock'
import axios from "axios";
import './WeatherCard.css'


export default class Card extends React.Component {

    constructor() {
        super()
        this.state = {
            photoUrl: ''
        }
        console.log('New start on /Weather')
        console.log(this.props)
        setTimeout(() => {
            this.searchW()
        }, 10000);
    }


    //Decide to send request on this father Component!
    searchW = (latitude, longitute, ifSearching) => {
        const { firsLoading, updateWeatherData } = this.props
        this.latitude = latitude;
        this.longitute = longitute;
        this.ifSearching = ifSearching
        if (!firsLoading || ifSearching) {
            const searchWeather = () => {
                this.latitude = latitude
                this.longitute = longitute
                console.log(`Can we start to request?`)
                const proxy = 'https://cors-anywhere.herokuapp.com/';
                const ApiWeatherLink = `https://api.darksky.net/forecast/d5a7dda54f011a00ba9ac7d784cc4581/${this.latitude === undefined ? 48.8587 : latitude},${this.longitute === undefined ? 2.3429 : longitute}`
                axios({
                    method: 'get',
                    url: proxy + ApiWeatherLink,
                    headers: { 'X-Requested-With': 'XMLHttpRequest' },
                }).then((response) => {
                    // Let the behavior of updating data happening in the cardCenter component:
                    let firsLoading = true;
                    const { currently } = response.data
                    const { timezone } = response.data //
                    const daily = response.data.daily.data
                    this.keeploading = 1;
                    updateWeatherData(firsLoading, [currently], timezone, daily, this.state.photoUrl)
                    this.ifSearching = false
                })
            }
            searchWeather()
        }
    }
    // searchTweets = () => {
    //     // Request 得重新找一个API。。。。才行。。。。
    //     const proxy = 'https://cors-anywhere.herokuapp.com/';
    //     const ApiTweetsLink = 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2'

    //     axios({
    //         method: 'get',
    //         url: proxy + ApiTweetsLink,
    //         headers: { 'X-Requested-With': 'XMLHttpRequest' },
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }



    checkLogIn = (loginResult) => {
        let { checkLogin, updateUserData } = this.props;
        checkLogin = loginResult
        updateUserData(checkLogin)
    }


    getPhotoUrl = (updatedPhotoUrl) => {
        console.log('now the url psssed to the Father')
        let { photoUrl } = this.state;
        photoUrl = updatedPhotoUrl
        this.setState({
            photoUrl
        })
    }


    render() {
        const { firsLoading, weatherErrorMsg, currently, daily, checkLogin, timeZone, photoUrl } = this.props
        // console.log('daily is:', daily)
        // const { photoUrl } = this.state
        // console.log(this.props)
        // console.log(timeZone)
        console.log(photoUrl)

        // if (!checkLogin) {
        //     return (
        //         <>
        //             <Login checkLogIn={this.checkLogIn} />
        //         </>
        //     )
        // } else {

        // if (!firsLoading) {
        //     return (
        //         <>
        //             <div id="loader-wrapper">
        //                 <div id="loader"></div>
        //             </div>
        //         </>
        //     )
        // }
        // // Has already logined  then the next step is to verify the data is whether loaded or not?
        // if (currently.length != 0) {


        return (
            <>
                <div className="cardFrame">
                    <div className="card_weather">
                        <CurrentWeather currently={currently ? currently : ''} timeZone={timeZone ? timeZone : ''} photoUrl={photoUrl} />
                        <Details daily={daily} />
                        {
                            this.ifSearching || !firsLoading ?
                                <div id="loader-wrapper">
                                    <div id="loader"></div>
                                </div> : ''
                        }
                        <SearchBar searchWeather={this.searchW} getPhotoUrl={this.getPhotoUrl} />
                    </div>
                </div>
            </>

        )
    }
}

