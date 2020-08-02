import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAlignJustify } from '@fortawesome/free-brands-svg-icons';
import {
    faPlay,
    faCloudRain,
    faSun,
    faPooStorm,
    faCloudSun
} from '@fortawesome/free-solid-svg-icons'
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
            firsLoading: false,
            keepLoading: false,
            currently: [],
            daily: [],
            timeZone: ``,
            weatherErrorMsg: ``,
            checkLogin: 0,
            photoUrl:''
        }
        this.keeploading = 1;
        this.oldloading = 0
        this.latitude = 0
        this.longitute = 0


        console.log('New start....................')
        console.log('firsLoading', this.state.firsLoading )
    }

    //Decide to send request on this father Component!
    searchW = (latitude, longitute) => {
        const searchWeather = () => {
            // this.setState({ keepLoading: true })
            this.latitude = latitude
            this.longitute = longitute
            console.log(`Can we start to request?`)
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const ApiWeatherLink = `https://api.darksky.net/forecast/d5a7dda54f011a00ba9ac7d784cc4581/${this.latitude === undefined ? 48.8587 : latitude},${this.longitute === undefined ? 2.3429 : longitute}`
            // const axios = require('axios')
            axios({
                method: 'get',
                url: proxy + ApiWeatherLink,
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
            }).then((response) => {
                const { temperature, summary, humidity, windSpeed } = response.data.currently
                const { timezone } = response.data // //mO
                this.keeploading = 1;
                this.oldloading = this.keeploading
                this.setState({
                    firsLoading: true,
                    currently: [{ temperature, summary, humidity, windSpeed }],
                    timeZone: timezone,
                    daily: response.data.daily.data
                }, () => {
                    this.keeploading = 0;
                })

                console.log(response)

            })
        }
        searchWeather()
    }

    searchTweets = () => {
        // Request 得重新找一个API。。。。才行。。。。
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const ApiTweetsLink = 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2'

        axios({
            method: 'get',
            url: proxy + ApiTweetsLink,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        }).then((response) => {
            console.log(response)
        })
    }


    checkLogIn = (loginResult) => {
        let { checkLogin } = this.state;
        checkLogin = loginResult
        this.setState({
            checkLogin
        })
    }

    getPhotoUrl = (updatedPhotoUrl)=>{


        console.log('now the url psssed to the Father')
        let { photoUrl} = this.state;
        photoUrl = updatedPhotoUrl


        this.setState({
            photoUrl
        })
        
        // Then pass this photoUrl to another child......

    }


    componentDidMount() {
       
        setTimeout(() => {
            this.searchW()
        }, 10000);

    }


    render() {
        const { firsLoading, weatherErrorMsg, currently, daily, checkLogin, photoUrl} = this.state
        const { timeZone } = this.state

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
                        <CurrentWeather currently={currently ? currently : ''} timeZone={timeZone ? timeZone : ''} photoUrl={photoUrl}/>
                        <Details daily={daily} />
                        {
                            firsLoading ||
                            <div id="loader-wrapper">
                                <div id="loader"></div>
                            </div>
                        }
                        <SearchBar searchWeather={this.searchW} getPhotoUrl={this.getPhotoUrl}/>
                    </div>
                </div>
            </>

        )
        // }
        // else return (
        //     <>
        //         <div className="firstPageError">{weatherErrorMsg}</div>
        //     </>
        // )

    }


}
// }

