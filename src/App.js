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
import { getProfile } from './Component/Store/REDUX/actionCreators'
import { connect } from 'react-redux'
export const myContext = React.createContext("userProfile");


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    // App组件最好不要设置setSTATE 或者forceUpdate， 因为这样会使全部的子组件发生re-render()...用redux。。。
    PassToLogin = (props) => {
        return (
            <Login
                upDateLocal={this.upDateLocal}
                {...props}
            />
        );
    }

    componentDidMount() {
        this.props.inUserProfile() //this should be an ascyn function..
    }

    render() {
        const { userProfile } = this.props
        // Now we can access userProfile in the store...
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

const mapStateToprops = (state) => {
    return {
        userProfile: state.userProfile
    }
}

const mapDispatchToProps = (dispatch) => {
    // 这个是用来修改store中的state。。。。
    // 把dispatch方法挂载到props上。。。。。
    return {
        inUserProfile() {
            dispatch(getProfile()) // This is an asyc operation..
        }
    }
}

// Let this component connect with store....
export default connect(mapStateToprops, mapDispatchToProps)(App)

