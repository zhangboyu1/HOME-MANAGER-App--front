import React from 'react';
// import Clock from '../Clock/Clock'
// import NavBar from '../NavBAR/NavBar'
import { NavLink } from "react-router-dom";

export default class Navigator extends React.Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="App">
                <div className="nav">
                    <NavLink exact to='/weather' activeClassName='active'>Weather</NavLink>
                    <NavLink exact to='/calender' activeClassName='active'>Calender</NavLink>
                </div>
            </div>
            // <Clock />
            // {/* <NavBar /> */ }
            // </>
        );
    }
}