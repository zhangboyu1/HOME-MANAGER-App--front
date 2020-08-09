import React, { Component } from 'react';
import './CaldenderHeadder.css'


export default class CalenderHeader extends Component {
    constructor(props) {
        super();

    }

    // Now we need to get the initalData, rather than showing the fake data...
    getInitalDate = () => {
        var newDate = new Date();
        const year = new Intl.DateTimeFormat('en-US', { year: "numeric" }).format(newDate)
        const month = new Intl.DateTimeFormat('en-US', { month: "numeric" }).format(newDate)
        const day = new Intl.DateTimeFormat('en-US', { day: "numeric" }).format(newDate)
        this.props.initCalendar(year, month, day)
        //This value need to pass the father to store 
    }

    hanldeMonthSelect = (e) => {
        console.log(e.target.className)
        let { month, year } = this.props
        if (e.target.className === "LastMonth") {
            let newMonth = month - 1;
            if (newMonth < 1) {
                year--;
                newMonth = 12;
            }
            this.props.changeCalender(year, newMonth)
        } else {
            let newMonth = parseInt(month) + 1;
            if (newMonth > 12) {
                year++;
                newMonth = 1;
            }
            this.props.changeCalender(year, newMonth)
        }
    }

    componentWillMount() {
        console.log('hear will mount')
        this.getInitalDate()
    }

    render() {
        const { month, year } = this.props
        return (
            <div className="headerborder">
                <button className="LastMonth" onClick={this.hanldeMonthSelect}> Last Month</button>
                <p>{month}月{year}年</p>
                <button className="NextMonth" onClick={this.hanldeMonthSelect}> Next Month</button>
            </div>
        )
    }
}