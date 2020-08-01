import React from 'react';
import WeatherCard from './Component/WeatherCard/WeatherCard'
import CalenderCard from './Component/CalenderComponent/Calender';
import NavigatorTop from './Component/NavigatorTop/NavigatorTop'

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import AnimatedSwitch from './Component/AnimatedSwitch/AnimatedSwitch';
import Footer from './Component/Footer/Footer';
import NaviSide from './Component/NaviSide/NaviSide';
import './App.css'

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <NavigatorTop />
                <NaviSide />
                <div className="CardWrapper" >
                    <AnimatedSwitch>
                        <Route exact path="/calender" component={CalenderCard} />
                        <Route exact path="/weather" component={WeatherCard} />
                    </AnimatedSwitch>
                </div>
                <Footer />
            </Router>
        );
    }
}