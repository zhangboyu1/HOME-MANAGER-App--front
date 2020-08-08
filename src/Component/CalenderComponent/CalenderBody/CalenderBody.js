import React, { Component } from 'react';
import './CalenderBody.css';
//最后一步了，引入navLink让页面动起来。。。。


export default class CalenderBody extends Component {
    constructor(props) {
        super();

    }


    render() {
        let arry1 = [], arry2 = [];
        const { month, year, monthDays, weekDays, day } = this.props

        console.log('Now its in the calender boday------------')
        console.log(monthDays, weekDays, day)
        console.log(month, year)
        for (var i = 0; i < weekDays; i++) {
            arry1[i] = i;
        }
        for (var j = 0; j < monthDays; j++) {
            arry2[j] = (j + 1);
        }
        var node1 = arry1.map(function (item) { return <li></li> })
        var node2 = arry2.map(function (item) { return (day === item) ? <li style={{ "background-color": "#eee" }}>{item}</li> : <li>{item}</li> })
        return (
            <div className="BodyBoder">
                <div className="weekday">
                    <ul>
                        <li>SUN</li>
                        <li>MON</li>
                        <li>TUE</li>
                        <li>WED</li>
                        <li>THU</li>
                        <li>FRI</li>
                        <li>SAT</li>
                    </ul>
                </div>
                <div className="CalendarDay">
                    <ul>{node1}{node2}</ul>
                </div>
            </div>
        )
    }
}