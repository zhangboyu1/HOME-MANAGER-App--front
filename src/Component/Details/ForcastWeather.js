import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faAlignJustify} from '@fortawesome/free-brands-svg-icons';
import { faPlay, 
        faCloudRain,
        faSun,
        faPooStorm,
        faCloudSun} from '@fortawesome/free-solid-svg-icons'
        
class ForcastWeather extends React.Component{

render(){

    return(
                <ul className="card_details_forcastWeather">
                <li>
                    <h1>mon</h1>
                    <p><FontAwesomeIcon icon={faCloudRain} /></p>
                    <h1 className="degree">9°</h1>
                    <p><small>raininig</small></p>
                </li>
                <li>
                    <h1>tue</h1>
                    <p><FontAwesomeIcon icon={faSun} /></p>
                    <h1 className="degree">15°</h1>
                    <p><small>sunny</small></p>
                </li>
                <li>
                    <h1>wed</h1>
                    <p><FontAwesomeIcon icon={faCloudSun} /></p>
                    <h1 className="degree">11°</h1>
                    <p><small>cloudy</small></p>
                </li>
                <li>
                    <h1>thu</h1>
                    <p><FontAwesomeIcon icon={faPooStorm} /></p>
                    <h1 className="degree">7°</h1>
                    <p><small>storm</small></p>
                </li>
                <li>
                    <h1>fri</h1>
                    <p><FontAwesomeIcon icon={faSun} /></p>
                    <h1 className="degree">18°</h1>
                    <p><small>sunny</small></p>
                </li>

            </ul>
        )
    }
}

export default ForcastWeather;