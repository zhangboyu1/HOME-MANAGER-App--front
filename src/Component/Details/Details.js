import React from 'react';
import CurrentNews from './CurrentNews';
import ForcastWeather from './ForcastWeather';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faAlignJustify} from '@fortawesome/free-brands-svg-icons';
import { faPlay, 
        faCloudRain,
        faSun,
        faPooStorm,
        faCloudSun} from '@fortawesome/free-solid-svg-icons'

class Details extends React.Component{

    render(){
         return(
            
            <div className="card_details">
            
                    <CurrentNews />
                    <ForcastWeather />
        </div>
    );
    }
}


export default Details;