import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Clock.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter，
         faAlignJustify，
         faPlay，
         faCloudRain，
         faSun，
         faPooStorm 
         faCloudSun
         faBars} from '@fortawesome/free-brands-svg-icons';

import Clock from './Clock.js';


function App() {
    
    return (

        <div className="container">
            <header>
                <FontAwesomeIcon icon={faBars} />
                <button class="btn"> 123 </button> 
            </header>
                 
        <Clock/>

        <main>
             <div className="cardbody">
                <line1 className="line1">
                
                    <div className="line1_left">
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

                </line1>
              
                <line2 className="line2">
           
                    <div className="line2_left">
                
                        <div className="line2_left_top">

                            <FontAwesomeIcon className = "twitter_icon" icon={faTwitter} style={{color: `blue`, fontSize:15, marginLeft:10}} />
                            <h1> twitter feed <small>#france</small></h1>
                        </div> 

                        <div className="line2_left_mid"> 
                            <h1>*</h1>
                            <p>  Donot forget your sunscreen tomorrow! </p>
                        </div> 

                        <div className="line2_left_bottom">
                            <h1>*</h1>
                            <p>  Amazing weather in Paris! </p>
                        </div> 
                </div> 

                    <table className="line2_right_content">

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
            </line2> 
            <line3 className="line3">

                <button className="line3_nextButton">
            
                <span className = "next_icon">N E X T &nbsp;</span>
                <FontAwesomeIcon className = "triangle" icon={faPlay} />
                </button>

            </line3> 
        </div>
    </main>
);
}
export default App;