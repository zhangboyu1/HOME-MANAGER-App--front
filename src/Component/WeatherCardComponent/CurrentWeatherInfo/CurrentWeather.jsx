import React from 'react';
import Li from './Li.jsx';
import './currentWeather.css'



function CurrentWeather(props) {
    const defaultUrl = "http://hdwpro.com/wp-content/uploads/2018/07/Cool-Paris-Wallpaper.jpg";

    const findCity = () => {
        let { timeZone } = props
        let cityArry = timeZone.split(``)
        let arr = []
        let flag = false
        let str = ``
        for (let i = 0; i < cityArry.length; i++) {
            if (cityArry[i] == `/`) {
                flag = true
                i++
            }

            if (flag) {
                arr.push(cityArry[i])
            }
        }
        //  console.log(arr)
        // let She=parseInt((temperature-32)*5/9))
        return str = arr.join('')
    }
    console.log(props.photoUrl)
    console.log("props is:", props)

    return (
        <div className="card_weather_currentWeather">
            <img className="currentWeather-photo" src={!props.photoUrl ? defaultUrl : props.photoUrl.trim()} alt="Girl in a jacket" width="800" height="300" />
            <div className="card_weather_currentWeather_info">
                {props.currently[0] != undefined ? <h1>{parseInt((props.currently[0].temperature - 32) * 5 / 9)}</h1> : ''}
                <p className="celsius"></p>
                {props.currently[0] != undefined ? <span>{props.currently[0].summary}</span> : ''}
                <ul>
                    {props.currently.map((element, index) =>
                        <Li key={index} element={element} />
                    )
                    }
                </ul>
            </div>

            <div className="card_weather_currentWeather_country">
                <span>{findCity()}</span>
            </div>

        </div>
    );
}


export default CurrentWeather;