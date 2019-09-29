import React from 'react';
import './App.scss';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faAlignJustify} from '@fortawesome/free-brands-svg-icons';
import { faPlay, 
        faCloudRain,
        faSun,
        faPooStorm,
        faCloudSun} from '@fortawesome/free-solid-svg-icons'



function App() {
    
    return (

        <div className="container">
            <header>
               
                <button class="btn"> 123 </button> 
            </header>

            <main>

                <div className="card">
                    <div className="card_currentWeather">
                    
                        <div className="card_currentWeather_info">
                                <h1>12</h1>
                                <p className="celsius"></p> 
                                <p>Cloud</p>

                                <ul>
                                    <li>
                                        <h1>humidity</h1>
                                        <p>64%</p>
                                    </li>
                                    <li>
                                        <h1>wind</h1>
                                        <p>12 k/m</p>
                                    </li>
                                
                                </ul>

                        </div> 
                
                    <div className="card_currentWeather_country"> 
                        <h1>Franch</h1> 
                    </div>

                </div>
              
                    <div className="card_details">
            
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

                        <div className="card_details_forcastWeather">
                        <ul>
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
                    </div>

                </div> 
            </div>
        </main>
    </div> 
 

);
}
export default App;