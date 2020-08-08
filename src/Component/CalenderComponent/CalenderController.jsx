import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faAlignJustify } from '@fortawesome/free-brands-svg-icons';
import {
    faPlay,
    faCloudRain,
    faSun,
    faPooStorm,
    faCloudSun
} from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react';
import CalenderBody from './CalenderBody/CalenderBody';
import CalenderHeader from './CalenderHeader/CalenderHeader';

import './Calender.css'



export default class CaldenderController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: '',
            month: '',
            year: '',
            monthDays: '',
            weekDays: ''
        }
    }


    getMonthDays = () => {
        //根据月份获取当前天数
        console.log('re-calculated the monthdays')
        var year = this.state.year,
            month = this.state.month;
        var temp = new Date(year, month, 0).getDate();
        console.log('the temp would be ', temp)
        return temp
    }

    getFirstDayWeek = () => {
        //根据年月返回当月1号是星期几
        console.log('re-calculated the Dayweeks')
        var year = this.state.year,
            month = this.state.month;
        var dt = new Date(year + '/' + month + '/1');//new Date(year,month,1);
        var Weekdays = dt.getDay();
        console.log('weekdays would be :', Weekdays)
        return Weekdays

    }



    changeCalender = (_year, _month) => {
        let { month, year } = this.state;
        month = _month;
        year = _year;
        this.setState({
            month,
            year,
        })
    }

    initCalendar = (_year, _month, _day) => {
        let { month, year, currentDay } = this.state;
        month = _month;
        year = _year;
        currentDay = _day;
        this.setState({
            month,
            year,
            currentDay
        })
    }


    render() {
        const monthDays = this.getMonthDays();
        const weekDays = this.getFirstDayWeek()
        console.log('Passed pops from APP can be retreived', this.props.passProps)
        const { month, year, currentDay } = this.state
        return (
            <div className="cardFrame">
                <div className="card_calender">
                    < CalenderHeader
                        initCalendar={this.initCalendar}
                        changeCalender={this.changeCalender}
                        month={month}
                        year={year}
                    />
                    < CalenderBody
                        month={month}
                        year={year}
                        day={currentDay}
                        monthDays={monthDays}
                        weekDays={weekDays}
                    />
                </div>
            </div>

        )
    }
}