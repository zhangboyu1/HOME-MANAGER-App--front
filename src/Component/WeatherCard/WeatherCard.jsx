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

// import Clock from '../Clock/Clock'
// import Login from '../Login/Login'
// import NavBar from '../NavBAR/NavBar'
import axios from "axios";
// import WeatherCard from '../WeatherAppComponent/WeatherCard';
// import CalenderCard from '../CalenderComponent/Calender'

import './WeatherCard.css'

// import '../../App.scss';

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
            checkLogin: 0
        }
        this.keeploading = 1;
        this.oldloading = 0
        this.latitude = 0
        this.longitute = 0

        setTimeout(() => {
            this.searchW()
        }, 10000);
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


    searchTweets = async () => {
        const ApiTweetsLink = 'https://api.twitter.com/1.1/search/tweets.json?q=from%3Atwitterdev&result_type=mixed&count=2'
        const axios = require('axios').default;
        try {
            const response1 = await axios.get(ApiTweetsLink);
            console.log(response1)
        }
        catch (error) {
            console.error(error);
            this.setState({
                tweetsErrorMsg: `Weather data cannot be loaded...`
            })
        }
    }


    findCityWeather = (city) => {
        // how to find the city coordinates

    }

    checkLogIn = (loginResult) => {
        let { checkLogin } = this.state;
        checkLogin = loginResult
        this.setState({
            checkLogin
        })
    }


    componentDidMount() {
        this.searchTweets();
        //First time

    }

    componentDidUpdate() {

        const latitude = this.latitude
        const longitute = this.longitute
        // setInterval(this.searchW(latitude, longitute), 20000)
    }


    render() {
        const { firsLoading, weatherErrorMsg, currently, daily, checkLogin } = this.state
        const { timeZone } = this.state

        console.log(this.props)


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

            <React.Fragment>
                {/* <Clock timeZone={timeZone} /> */}
                {/* <NavBar /> */}

                <div className="cardFrame">
                    <div className="card_weather">
                        <CurrentWeather currently={currently ? currently : ''} timeZone={timeZone ? timeZone : ''} />
                        <Details daily={daily} />
                        {
                            firsLoading ||
                            <div id="loader-wrapper">
                                <div id="loader"></div>
                            </div>
                        }
                        <SearchBar searchWeather={this.searchW} />
                    </div>
                </div>

            </React.Fragment>

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

