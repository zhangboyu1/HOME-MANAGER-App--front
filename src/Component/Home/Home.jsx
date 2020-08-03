import React from 'react';

// import CalenderCard from '../CalenderComponent/Calender';
// import WeatherCard from '../WeatherCard/WeatherCard'

import NaviSide from '../NaviSide/NaviSide';
export default class Home extends React.Component {

    constructor(props) {
        super()
    }

    render() {

        console.log(this.props)
        return (
            <div >
                <NaviSide />
                <h1>This is Home</h1>
            </div>


        )
    }
}