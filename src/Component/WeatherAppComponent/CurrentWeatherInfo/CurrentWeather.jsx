import React from 'react';
import Li from './Li.jsx';


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

        const { temperature, summary } = this.props.currently[0]

        console.log(temperature)

        return (

            <div className="card_currentWeather">

                <div className="card_currentWeather_info">

                    <h1>{parseInt((temperature - 32) * 5 / 9)}</h1>
                    <p className="celsius"></p>
                    <span>{summary}</span>

                    <ul>
                        {this.props.currently.map((element, index) =>
                            <Li key={index} element={element} />
                        )
                        }
                    </ul>
                </div>

                <div className="card_currentWeather_country">
                    <h1>{this.findCity()}</h1>
                    <button class="btn_nextPage"> <strong> > </strong> </button>
                </div>

            </div>
        );
    }

}

export default CurrentWeather;