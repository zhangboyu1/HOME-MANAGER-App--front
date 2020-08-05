import React from 'react';
import NavigatorTop from './Component/NavigatorTop/NavigatorTop'

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer';
import CardCenter from './Component/CardCenter/CardCenter'
import LogIn from './Component/LogIn/LogIn'
import SignUp from './Component/SignUp/SignUp'
import SubSignUp from './Component/SignUp/SubSignUp/SubSIgnUp'
import NaviSide from './Component/NaviSide/NaviSide'
import { data } from './Component/Store/localStorage'
import './App.css'
export const myContext = React.createContext("userProfile");

export default class App extends React.Component {

    upDateLocal = () => {
        console.log('the app.js is being invoked______________________________')
        console.log("Now the current user would be:", data.get('currentUser'))
        this.currentUser = data.get('currentUser')
        this.userProfile = data.get(this.currentUser)
        this.forceUpdate();
        return
    }



    componentWillMount() {
        this.upDateLocal()
    }

    PassToHome = (props) => {
        return (
            <Home
                upDateLocal={this.upDateLocal}
                {...props}
            />
        );
    }


    PassToLogin = (props) => {
        return (
            <LogIn
                upDateLocal={this.upDateLocal}
                {...props}
            />
        );
    }

    render() {
        return (
            <Router>
                <NavigatorTop />
                <myContext.Provider value={this.userProfile}>
                    <NaviSide />
                </myContext.Provider>
                <switch >
                    <Route exact path="/" render={this.PassToHome} />
                    <Route exact path="/Login" render={this.PassToLogin} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/sub-sign-up" component={SubSignUp} />
                </switch>
                <CardCenter />
                <Footer />
            </Router>
        );
    }
}