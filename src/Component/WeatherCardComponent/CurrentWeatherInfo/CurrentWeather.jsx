import React from 'react';
import Li from './Li.jsx';
import './currentWeather.css'


class CurrentWeather extends React.Component {

    constructor(props) {
        super(props)

    }

    findCity = () => {

        let { timeZone } = this.props
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

    render() {

        // const { temperature, summary } = this.props.currently[0]
        const defaultUrl = "http://hdwpro.com/wp-content/uploads/2018/07/Cool-Paris-Wallpaper.jpg";

        const {photoUrl} = this.props

        console.log(photoUrl)

        return (
          

            <div className="card_weather_currentWeather">

                <img className="currentWeather-photo" src={photoUrl === '' ? defaultUrl : photoUrl} alt="Girl in a jacket" width="800" height="300" />

                <div className="card_weather_currentWeather_info">

                    {this.props.currently[0] != undefined ? <h1>{parseInt((this.props.currently[0].temperature - 32) * 5 / 9)}</h1> : ''}
                    <p className="celsius"></p>
                    {this.props.currently[0] != undefined ? <span>{this.props.currently[0].summary}</span> : ''}

                    <ul>
                        {this.props.currently.map((element, index) =>
                            <Li key={index} element={element} />
                        )
                        }
                    </ul>
                </div>

                <div className="card_weather_currentWeather_country">
                    <span>{this.findCity()}</span>
                </div>

            </div>
        );
    }

}

export default CurrentWeather;