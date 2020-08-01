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


        return (

            <div className="card_weather_currentWeather">

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
                    <h1>{this.findCity()}</h1>
                </div>

            </div>
        );
    }

}

export default CurrentWeather;