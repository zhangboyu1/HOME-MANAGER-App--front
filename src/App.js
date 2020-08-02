import React from 'react';
import NavigatorTop from './Component/NavigatorTop/NavigatorTop'

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from './Component/Home/Home'
import Footer from './Component/Footer/Footer';
import NaviSide from './Component/NaviSide/NaviSide';
import CardCenter from './Component/CardCenter/CardCenter'
import './App.css'


export default class App extends React.Component {

    render() {
        return (
            <Router>
                <NavigatorTop />
                <NaviSide />
                <switch>
                    <Route exact path="/" component={Home} />
                </switch>
                <CardCenter />
                <Footer />
            </Router>
        );
    }
}