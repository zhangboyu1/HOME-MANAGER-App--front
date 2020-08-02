import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard'
import CalenderCard from '../CalenderComponent/Calender';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import AnimatedSwitch from '../AnimatedSwitch/AnimatedSwitch'
import Home from '../Home/Home';
// import Home from './Component/Home/Home'

export default class CardCenter extends React.Component {
    // This is a component that is used to control all the data related to the card section....
    constructor(props) {
        super()
        this.state = {
            firsLoading: false,
            keepLoading: false,
            currently: [],
            daily: [],
            timeZone: ``,
            weatherErrorMsg: ``,
            checkLogin: 0,
        }
        this.keeploading = 1;
        this.oldloading = 0
        console.log('New start....................')
        console.log('firsLoading', this.state.firsLoading)
    }

    updateWeatherData = (firsLoading_upD, currently_upD, timeZone_upD, daily_upD) => {
        let { firsLoading, currently, daily, checkLogin, timeZone } = this.state
        firsLoading = firsLoading_upD;
        currently = currently_upD;
        daily = daily_upD;
        timeZone = timeZone_upD;
        // checkLogin = checkLogin_upD;
        this.setState({
            firsLoading, currently, daily, timeZone,
            checkLogin
        })
    }

    updateUserData = (checkLogin_upD) => {
        let { checkLogin } = this.state
        checkLogin = checkLogin_upD;
        this.setState({
            checkLogin
        })
    }

    // I just want to pass the props to the CalenderCard component.....
    // How do i do this? 

    passToWeather = (props) => {
        const { firsLoading, currently, daily, checkLogin, timeZone } = this.state
        console.log(this.updateWeatherData)

        return (
            <WeatherCard
                updateWeatherData={this.updateWeatherData}
                updateUserData={this.updateUserData}
                firsLoading={firsLoading}
                currently={currently}
                daily={daily}
                timeZone={timeZone}
                checkLogin={checkLogin}
                {...props}
            />
        );
    }

    // This function used to pass the props
    PassToCalender = (props) => {
        return (
            <CalenderCard
                toggleSidebarOn={this.toggleSidebarOn}
                {...props}
            />
        );
    }


    render() {
        console.log(this.state)
        return (
            <div className="CardWrapper" >
                <AnimatedSwitch>
                    <Route exact path="/calender" render={this.PassToCalender} />
                    <Route exact path="/weather" render={this.passToWeather} />
                </AnimatedSwitch>
            </div>
        );
    }
}