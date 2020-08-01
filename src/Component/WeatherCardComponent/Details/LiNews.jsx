import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import './Details.css'
export default class LiNews extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        const { mediaName, placeId, fristPost, secondPost, mediaIcon } = this.props.element
        return (
            <>
                <li className="card_weather_details_currentNews_title">
                    <FontAwesomeIcon className="twitter_icon" icon={mediaIcon == `faTwitter` ? faTwitter : faFacebookSquare} style={{ color: `blue`, fontSize: 35, marginLeft: 10 }} />
                    <h1>&nbsp; &nbsp;&nbsp;{mediaName} &nbsp;<small>#{placeId}</small></h1>
                </li>

                <li className="card_weather_details_currentNews_post">
                    <p> {fristPost} </p>
                </li>

                <li className="card_weather_details_currentNews_post">
                    <p> {secondPost} </p>
                </li>
            </>
        )
    }
}

