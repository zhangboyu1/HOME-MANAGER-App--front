import React from 'react';
import Clock from '../Clock/Clock'
// import NavBar from '../NavBAR/NavBar'
import { NavLink } from "react-router-dom";
import './NavigatorTop.css'

export default class NavigatorTop extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        // how to get the TimeZone for Clock component..!!!!
        return (
            <div className="navBarTop">
                <Clock />
                <NavLink exact to='/weather' activeClassName='active'>
                    <div className="forward">1</div>
                </NavLink>

                <NavLink exact to='/calender' activeClassName='active'>
                    <div className="backward">2</div>
                </NavLink>
            </div>
        );
    }
}