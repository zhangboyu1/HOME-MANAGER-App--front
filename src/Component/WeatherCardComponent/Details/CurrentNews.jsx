import React from 'react';
import LiNews from './LiNews.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAlignJustify, faBluetooth, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faPlay, } from '@fortawesome/free-solid-svg-icons'

import './Details.css'

export default class CurrentNews extends React.Component {
    constructor() {
        super()
        this.state = {
            status: true,
            mediaInfo: []
        }
    }

    searchTweets = () => {
        const { status } = this.state
        if (status === true) {
            this.setState({
                status: false,
                mediaInfo: [{
                    mediaName: `TwitterFeed`,
                    placeId: `France`,
                    fristPost: `Donot forget your sunscreen tomorrow!`,
                    secondPost: `Amazing weather in Paris!`,
                    mediaIcon: `faTwitter`
                }]

            })
        } else {
            this.setState({
                status: true,
                mediaInfo: [{
                    mediaName: `Facebook`,
                    placeId: `France`,
                    fristPost: `There is another faceBook`,
                    secondPost: `Paris is good to visit!`,
                    mediaIcon: `faFacebookSquare`
                }]
            })
        }
    }

    componentDidMount() {
        this.setState({
            mediaInfo: [{
                mediaName: `TwitterFeed`,
                placeId: `France`,
                fristPost: `Donot forget your sunscreen tomorrow!`,
                secondPost: `Amazing weather in Paris!`,
                mediaIcon: `faTwitter`
            }]
        })
    }
    render() {
        const { mediaInfo } = this.state
        console.log(mediaInfo)
        return (
            <ul className="card_weather_details_currentNews">
                {
                    this.state.mediaInfo.map((element, index) => <LiNews key={index} element={element} />)
                }

                <button className="card_weather_currentWeather_next" onClick={this.searchTweets} >
                    <span className="next_icon">N E X T &nbsp;</span>
                    <FontAwesomeIcon className="triangle" icon={faPlay} />
                </button>
            </ul >
        )

    }
}
