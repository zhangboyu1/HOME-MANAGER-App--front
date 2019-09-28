import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Clock.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faPooStorm } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun} from '@fortawesome/free-solid-svg-icons'

//import Clock from './Clock.js';


function App() {
    
    return (

        <div className="container">
            <header>
               
                <button class="btn"> 123 </button> 
            </header>
                

             <div className="cardbody">
                <div className="currentWeather">
                
                    <div className="currentWeather-info">
                        <div className="line1_left_top">
                            <h1>12</h1>
                            <span className="degreeOperator">∘</span>
                        </div>
                   
                        <div className="line1_left_mid">Cloud</div>

                        <div className="line1_left_bottom">
                            <h1 className="humi"> HUMIDITY</h1>
                            <p className="Number"> 50% </p>
                            <h1 className="humi">WIND </h1>
                            <p className="Number">12 K/M </p>
                        </div> 

                    </div>

                    <div className="line1_right"></div>

                </div>
              
                <div className="details">
           
                    <div className="currentNews">
                
                        <div className="currentWeather_title">

                            <FontAwesomeIcon className = "twitter_icon" icon={faTwitter} style={{color: `blue`, fontSize:15, marginLeft:10}} />
                            <h1> twitter feed <small>#france</small></h1>
                        </div> 

                        <div className="currentWeather_post"> 
                            <h1>*</h1>
                            <p>  Donot forget your sunscreen tomorrow! </p>
                        </div> 

                        <div className="currentWeather_post">
                            <h1>*</h1>
                            <p>  Amazing weather in Paris! </p>
                            <button className="currentWeather_next">
                                <span className = "next_icon">N E X T &nbsp;</span>
                                <FontAwesomeIcon className = "triangle" icon={faPlay} />
                             </button>
                        </div> 
                </div> 

                    <table className="forcastWeather">

                        <tr className="weekDays" style={{fontSize:15}}>
                            <th className="td">MON</th>
                            <th className="td">TUE</th>
                            <th className="td">WED</th>
                            <th className="td">THU</th>
                            <th className="td">FRI</th>
                        </tr>

                        <tr className="weatherPattern" >
                            <td className="td td2">
                                <FontAwesomeIcon className = "weather_icon faCloudRain" icon={faCloudRain} />
                            </td>
                            <td className="td td2">
                                <FontAwesomeIcon className = "weather_icon faSun" icon={faSun} />
                            </td>
                            <td className="td td2">
                                <FontAwesomeIcon className = "weather_icon faCloudSun" icon={faCloudSun} />
                            </td> 
                            <td className="td td2">
                                <FontAwesomeIcon className = "weather_icon faPooStorm" icon={faPooStorm} />
                            </td>
                            <td className="td td2">
                                <FontAwesomeIcon className = "weather_icon faSun" icon={faSun} />
                            </td> 
                        </tr>

                        <tr className="degree">
                            <td className="td"> 
                                <p className="degreeNum_m degreeNum">9</p>
                                <p>sunny</p>
                                
                            </td>
                            <td className="td">
                                <p className="degreeNum_t degreeNum">15</p>
                                <p>sunny</p>
                            </td>

                            <td className="td">
                                <p className="degreeNum_w degreeNum">11</p>
                                <p>sunny</p>
                            </td> 

                            <td className="td">
                                <p className="degreeNum_th degreeNum">7</p>
                                <p>sunny</p>
                            </td>
                            
                            <td className="td">
                                <p className="degreeNum_f degreeNum">7</p>
                                <p>sunny</p>
                            </td> 
                        </tr>
                </table>
            </div> 
        </div>
    </div>
   
);
}
export default App;