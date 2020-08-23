import React from 'react';
import Li from './Li.jsx';
import './currentWeather.css'
import PropTypes from 'prop-types'

function CurrentWeather(props) {
    let { photoUrl, currently, timeZone } = props

    const judgeCurrently = () => {
        return currently[0] &&
            <>
                <h1>{parseInt((currently[0].temperature - 32) * 5 / 9)}</h1>
                <p className="celsius"></p>
                <span>{currently[0].summary}</span>
            </>
    }

    return (
        <div className="card_weather_currentWeather">
            <img className="currentWeather-photo"
                src={photoUrl}
                alt={`${timeZone.split(`/`)[1]}`}
                width="800" height="300"
            />
            <div className="card_weather_currentWeather_info">
                {
                    judgeCurrently()
                }

                <ul>
                    {props.currently.map((element, index) =>
                        <Li key={index} element={element} />
                    )
                    }
                </ul>
            </div>

            <div className="card_weather_currentWeather_country">
                <span>{timeZone.split(`/`)[1]}</span>
            </div>
        </div>
    );
}

CurrentWeather.propTypes = {
    photoUrl: PropTypes.string.isRequired,
    currently: PropTypes.array.isRequired
}


export default CurrentWeather;