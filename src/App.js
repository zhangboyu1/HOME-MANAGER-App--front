import React from 'react';
import WeatherCard from './Component/WeatherCard/WeatherCard'
// import WeatherCard from './Component/WeatherCardComponent/WeatherCard'
import CalenderCard from './Component/CalenderComponent/Calender';
import Navigator from './Component/Navigator/Navigator'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import AnimatedSwitch from './Component/AnimatedSwitch/AnimatedSwitch';

export default class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navigator />
                    <AnimatedSwitch>
                        <Route exact path="/calender" component={CalenderCard} />
                        <Route exact path="/weather" component={WeatherCard} />
                    </AnimatedSwitch>
                </Router>
            </React.Fragment>
        );
    }
}