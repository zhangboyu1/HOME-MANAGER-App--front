import React from 'react';

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

        let { timeZone } = this.props.timeZone
        const { time } = this.state
        const currentTime = time.toLocaleString("en-AU", {
            timeZone
        })

        return (
            <div className="clock">
                <h6><strong>{currentTime}&nbsp;&nbsp;&nbsp;<small>{timeZone}</small></strong></h6>
            </div>
        )
    }
}