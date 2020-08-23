import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard'
import CaldenderController from '../CalenderComponent/CalenderController';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import AnimatedSwitch from '../AnimatedSwitch/AnimatedSwitch'

export default class CardCenter extends React.Component {
    // This is a component that is used to control all the data related to the card section....
    constructor(props) {
        super()
        this.state = {
            firsLoading: true,
            currently: [],
            daily: [],
            timeZone: ``,
            weatherErrorMsg: ``,
            checkLogin: 0,
            photoUrl: undefined
        }
        this.keeploading = 1;
        this.oldloading = 0
    }

    updateWeatherData = (_firsLoading, _currently, _timeZone, _daily) => {
        let { firsLoading, currently, daily, checkLogin, timeZone } = this.state
        firsLoading = _firsLoading;
        currently = _currently;
        daily = _daily;
        timeZone = _timeZone;
        this.setState({
            firsLoading, currently, daily, timeZone,
            checkLogin
        })
    }

    getPhotoUrl = (_photoUrl) => {
        let { photoUrl } = this.state
        photoUrl = _photoUrl
        this.setState({
            photoUrl
        })
    }

    updateUserData = (checkLogin_upD) => {
        let { checkLogin } = this.state
        checkLogin = checkLogin_upD;
        this.setState({
            checkLogin
        })
    }

    passToWeather = (props) => {
        const { firsLoading, currently, daily, checkLogin, timeZone, photoUrl } = this.state

        return (
            <WeatherCard
                updateWeatherData={this.updateWeatherData}
                updateUserData={this.updateUserData}
                firsLoading={firsLoading}
                currently={currently}
                daily={daily}
                timeZone={timeZone}
                checkLogin={checkLogin}
                getPhotoUrl={this.getPhotoUrl}
                photoUrl={photoUrl}
                {...props}
            />
        );
    }

    // This function used to pass the props
    PassToCalender = (props) => {
        return (
            <CaldenderController
                toggleSidebarOn={this.toggleSidebarOn}
                passProps={this.props.passProps}
                {...props}
            />
        );
    }

    render() {
        return (
            <>
                <div className="CardWrapper" >
                    <AnimatedSwitch>
                        <Route exact path="/calender" render={this.PassToCalender} />
                        <Route exact path="/weather" render={this.passToWeather} />
                    </AnimatedSwitch>
                </div>
            </>
        );

    }
}