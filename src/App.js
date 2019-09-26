import React from 'react';
import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faPooStorm } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun} from '@fortawesome/free-solid-svg-icons'


function App() {
    
    return (<div className="App">
    <div className="wrapper">
        <div className="header">
            <div header_left>123 </div> 
            <div header_right>456 </div> 
        </div> 
        <button class="btn"> 123 </button> 
        <div className="cardbody">
                            
            <div className="line1">
                                
                <div className="line1_left">
                                    
                    <div className="line1_left_top">
                     <div className="line1_left_top-temperature">
                      <span classNmae="number">12</span>
                      <span className="degreeOperator">∘</span>
                      </div>
                      
                    </div>
                    <div className="line1_left_mid">Cloud</div>
                    <div className="line1_left_blank"></div>
                    <div className="line1_left_bottom">
                                                
                        <div className="line1_left_bottom-humi">
                        <div className="humi">HUMIDITY</div>
                        <div className="Number">50%</div>
                        </div> 

                        <div className="line1_left_bottom-wind">
                        <div className="humi">WIND</div>
                        <div className="Number">12 K/M</div>
                        
                        </div> 
                    </div>
                    <div className="line1_left_blank">  &nbsp; </div>

                </div>

                <div className="line1_right"></div>
            </div> 
              
            <div className="line2">
           
                <div className="line2_left">
                <div className="line2_left_null"> &nbsp; </div>
                    <div className="line2_left_top">

                    <FontAwesomeIcon className = "twitter_icon" icon={faTwitter} style={{color: `blue`, fontSize:15, marginLeft:10}} />
                    <span className = "&nbsp; &nbsp;twitter_feed" style={{fontSize:15}}> &nbsp;Twitter Feed</span>
                    <a className = "city" href="#" > &nbsp;#France </a>

                    </div> 
                    <div className="line2_left_mid"> 
                    <div className = "blue_circle"> * </div>
                    <div className="wenzi">  Donot forget your sunscreen tomorrow! </div>
                    </div> 
                    <div className="line2_left_bottom">
                    <div className = "blue_circle"> * </div>
                    <div className="wenzi"> Amazing weather in Paris!</div>
                    </div> 
                </div> 

                <div className="line2_right">
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
                </div> 
            </div> 
            <div className="line3">
            <button className="line3_nextButton">
            
            <span className = "next_icon">N E X T &nbsp;</span>
            <FontAwesomeIcon className = "triangle" icon={faPlay} />
            </button>
            </div> 
        </div>
     </div> 
    </div>
);
}
export default App;