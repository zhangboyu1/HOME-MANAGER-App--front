import React from 'react';

import CurrentWeather from '../WeatherAppComponent/CurrentWeatherInfo/CurrentWeather.jsx';
import Details from '../WeatherAppComponent/Details/Details.jsx';







class App extends React.Component {

    render() {
        return (

            <>
                <CurrentWeather currently={currently} timeZone={timeZone} />
                <Details daily={daily} />
                {
                    this.oldloading === 1 ? <></> :
                        <div id="loader-wrapper">
                            <div id="loader"></div>
                        </div>
                }

            </>
        );
    }
}