import React from 'react';


class WeatherOverview extends React.Component{

    render(){

        return(
            
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

        )

    }
}

export default WeatherOverview;