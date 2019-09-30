import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faAlignJustify} from '@fortawesome/free-brands-svg-icons';
import { faPlay, 
        faCloudRain,
        faSun,
        faPooStorm,
        faCloudSun} from '@fortawesome/free-solid-svg-icons'

import CurrentWeather from './CurrentWeatherInfo/CurrentWeather';
import Details from './Details/Details';

class WeatherCard extends React.Component{

    render(){

        return(
                    <div className="card">

                    <CurrentWeather />

                    <Details />
            </div>
        );
    }
}


export default WeatherCard;