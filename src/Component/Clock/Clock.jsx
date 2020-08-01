import React from 'react';

import './Clock.css'
export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date() }
    }

    componentDidMount() {
        this.upDateTime();
    }

    upDateTime = () => {

        setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000);
    }

    render() {
        // let { timeZone } = this.props.timeZone  
        // ???????? time zone 怎么搞？？？？？？？？？
        const { time } = this.state
        const currentTime = time.toLocaleString("en-AU")

        return (
            <div className="clock">
                <h6><strong>{currentTime}&nbsp;&nbsp;&nbsp;</strong></h6>
            </div>
        )
    }
}