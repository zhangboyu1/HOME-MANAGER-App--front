import React from 'react';

import CalenderCard from '../CalenderComponent/Calender';
import WeatherCard from '../WeatherCard/WeatherCard'


export default class Home extends React.Component {

    constructor(props) {
        super()

        this.state = {
            path: ''
        }

    }

    readPath = (pathName) => {

        console.log(pathName)
        let { path } = this.state
        path = pathName
        this.setState({
            path
        })
    }


    shouldComponentUpdate(props) {

        if (props) {
            return
            console.log(props.history.location.pathname)
        }

    }

    render() {
        const { path } = this.state
        console.log(path)
        // console.log(this.props.history.location.pathname)
        // how to get the TimeZone for Clock component..!!!!
        return (
            <div >
                {path === '/calender' ? <CalenderCard read={this.readPath} /> : ''}
                {path === '/weather' ? <WeatherCard read={this.readPath} /> : ''}
            </div>


        )
    }
}