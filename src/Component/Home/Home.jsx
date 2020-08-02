import React from 'react';

import CalenderCard from '../CalenderComponent/Calender';
import WeatherCard from '../WeatherCard/WeatherCard'


export default class Home extends React.Component {

    constructor(props) {
        super()

    }



    render() {
        // console.log(this.props.history.location.pathname)
        // how to get the TimeZone for Clock component..!!!!
        return (
            <div >
                <h1>This is Home</h1>
            </div>


        )
    }
}