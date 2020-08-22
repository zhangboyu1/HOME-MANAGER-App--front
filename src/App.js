import React from 'react';
import NavigatorTop from './Component/NavigatorTop/NavigatorTop'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer';
import CardCenter from './Component/CardCenter/CardCenter'
import Login from './Component/Login/Login'
import SignUp from './Component/SignUp/SignUp'
import SubSignUp from './Component/SignUp/SubSignUp/SubSIgnUp'
import NaviSide from './Component/NaviSide/NaviSide'
import './App.css'
export const myContext = React.createContext("userProfile");

export default class App extends React.Component {

    constructor() {
        super()
        this.state = {
            userProfile: {}
        }
    }

    // App组件最好不要设置setSTATE 或者forceUpdate， 因为这样会使全部的子组件发生re-render()...用redux。。。
    upDateLocal = (_upDateProfileData) => {
        console.log(_upDateProfileData)
        let userProfile = this.state
        if (_upDateProfileData) {
            userProfile = { ..._upDateProfileData.content }
            this.setState({
                userProfile
            }, () => {
                console.log('updatedProfile is, ', this.state.userProfile)   //Profile 问题无法解决。。。。。。需要引入第三方数据管理层。。才能解决。。
            })
        }
    }

    PassToLogin = (props) => {
        return (
            <Login
                upDateLocal={this.upDateLocal}
                {...props}
            />
        );
    }

    render() {
        const { userProfile } = this.state
        return (
            <Router>
                <NavigatorTop />
                <switch >
                    <myContext.Provider value={userProfile}>
                        <NaviSide />
                    </myContext.Provider>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" render={this.PassToLogin} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/sub-sign-up" component={SubSignUp} />
                </switch>
                <CardCenter />
                <Footer />
            </Router>
        );
    }
}