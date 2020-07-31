import React from 'react';
import CurrentNews from './CurrentNews.jsx';
import LiForcast from './LiForcast.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAlignJustify } from '@fortawesome/free-brands-svg-icons';
import {
    faPlay,
    faCloudRain,
    faSun,
    faPooStorm,
    faCloudSun
} from '@fortawesome/free-solid-svg-icons'

class Details extends React.Component {

    constructor(props) {
        super(props.daily)
    }

    render() {
        //  console.log(this.props)
        let { daily } = this.props
        //Add weekDay attribute to the Daily arry, then print out in the Li component!
        for (let i = 0; i < daily.length; i++) {
            if (i == 0) {
                daily[i].weekDay = `MON`
            } else if (i == 1) {
                daily[i].weekDay = `TUE`
            } else if (i == 2) {
                daily[i].weekDay = `WED`
            } else if (i == 3) {
                daily[i].weekDay = `THR`
            } else if (i == 4) {
                daily[i].weekDay = `FRI`
            } else if (i == 5) {
                daily[i].weekDay = `SAT`
            } else if (i == 6) {
                daily[i].weekDay = `SUN`
            }
        }

        return (

            <div className="card_details">

                <CurrentNews />
                <ul className="card_details_forcastWeather" >
                    {
                        this.props.daily.map((element, index) => <LiForcast element={element} index={index} />)

                    }
                </ul>


            </div>
        );
    }
}


export default Details;