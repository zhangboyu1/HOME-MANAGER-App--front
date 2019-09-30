import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faAlignJustify} from '@fortawesome/free-brands-svg-icons';
import { faPlay, 
        faCloudRain,
        faSun,
        faPooStorm,
        faCloudSun } from '@fortawesome/free-solid-svg-icons'

class CurrentNews extends React.Component{

    render(){

        return(

            <ul className="card_details_currentNews">
                    
                                <li className="card_details_currentNews_title">
                                    <FontAwesomeIcon className = "twitter_icon" icon={faTwitter} style={{color: `blue`, fontSize:35, marginLeft:10}} />
                                    <h1>&nbsp; twitter feed &nbsp;<small>#france</small></h1>
                                </li>
                            

                            <li className="card_details_currentNews_post"> 

                                <h2></h2>
                                <p1></p1>
                                <p2>  Donot forget your sunscreen tomorrow! </p2>
                                
                            </li> 

                            <li className="card_details_currentNews_post">
                                <h2></h2>
                                <p1></p1>
                                <p2>  Amazing weather in Paris! </p2>
                                
                            </li> 
                            <button className="card_currentWeather_next">

                                    <span className = "next_icon">N E X T &nbsp;</span>

                                    <FontAwesomeIcon className = "triangle" icon={faPlay} />
                                    
                                </button>
                        </ul> 
        )

    }
}

export default CurrentNews;