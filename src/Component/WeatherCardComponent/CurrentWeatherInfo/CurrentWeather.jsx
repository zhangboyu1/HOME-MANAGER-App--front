import React from 'react';
import Li from './Li.jsx';
import './currentWeather.css'

function CurrentWeather(props) {
    const defaultUrl = "http://hdwpro.com/wp-content/uploads/2018/07/Cool-Paris-Wallpaper.jpg";

    return (
        <div className="card_weather_currentWeather">
            <img className="currentWeather-photo" src={!props.photoUrl ? defaultUrl : props.photoUrl} alt="Girl in a jacket" width="800" height="300" />
            <div className="card_weather_currentWeather_info">
                {props.currently[0] ? <h1>{parseInt((props.currently[0].temperature - 32) * 5 / 9)}</h1> : ''}
                <p className="celsius"></p>
                {props.currently[0] ? <span>{props.currently[0].summary}</span> : ''}
                <ul>
                    {props.currently.map((element, index) =>
                        <Li key={index} element={element} />
                    )
                    }
                </ul>
            </div>

            <div className="card_weather_currentWeather_country">
                <span>{props.timeZone.split(`/`)[1]}</span>
            </div>
        </div>
    );
}


export default CurrentWeather;