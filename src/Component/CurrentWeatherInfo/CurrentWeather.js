import React from 'react';

import  WeatherOverview from './WeatherOverview';
import  CountryOverview from './CountryOverview';


class CurrentWeather extends React.Component{

    render(){

        return(
            
            <div className="card_currentWeather">

                <WeatherOverview />

                <CountryOverview />
                
            </div>
        );
    }

}

export default CurrentWeather;