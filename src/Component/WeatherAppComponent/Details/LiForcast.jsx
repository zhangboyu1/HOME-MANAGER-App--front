import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAlignJustify } from '@fortawesome/free-brands-svg-icons';
import {
    faPlay,
    faCloudRain,
    faSun,
    faPooStorm,
    faCloudSun
} from '@fortawesome/free-solid-svg-icons'

export default class LiForcast extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {

        const { weekDay, icon, temperatureHigh, temperatureLow } = this.props.element
        //Judge What icon should be displaied on the sreen
        let icons = ``
        if (icon === `rain`) {
            icons = faPooStorm
        } else if (icon === `partly-cloudy-day`) {
            icons = faCloudSun
        } else if (icon === `cloudy`) {
            icons = faCloudSun
        } else if (icon === `sunny`) {
            icons = faCloudSun
        } else if (icon === `clear-day`) {
            icons = faCloudRain
        }

        return (

            <>
                <li>
                    <h1>{weekDay}</h1>
                    <p><FontAwesomeIcon icon={icons} /></p>
                    <h5 className="degree">{parseInt((temperatureLow - 32) * 5 / 9)}-{parseInt((temperatureHigh - 32) * 5 / 9)}°</h5>
                    <p><small>{icon}</small></p>
                </li>
            </>
        )
    }
}

