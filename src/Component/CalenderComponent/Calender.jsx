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
import './Calender.css'



export default class CalenderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: '',
            currentMonth: '',
            currentYear: '',
            weekList: [
                { name: 'MON', className: '' },
                { name: 'TUE', className: '' },
                { name: 'WED', className: '' },
                { name: 'THU', className: '' },
                { name: 'FRI', className: '' },
                { name: 'SAT', className: '' },
                { name: 'SUN', className: '' }
            ],
            dayList: []
        }
        this.initCalendar = this.initCalendar.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.preMonth = this.preMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }


    componentDidMount() {
        this.initCalendar()
    }

    // 获取当前date的当月第一天的字符串形式
    getMonthFirstDate(date) {
        let nowYear = date.getFullYear(); // 获取年份
        let nowMonth = date.getMonth() + 1; // 获取月份
        return `${nowYear}-${nowMonth}-01`
    }

    // 获取当前date的字符串形式
    getDateString(date) {
        let nowYear = date.getFullYear(); // 获取年份
        let nowMonth = date.getMonth() + 1; // 获取月份
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        return `${nowYear}-${nowMonth}-${day}`
    }

    // 上个月
    preMonth() {
        let date = new Date(`${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay}`)
        let preMonthFirstDate = new Date(this.getMonthFirstDate(new Date(date.setDate(0)))); // 0 是上个月最后一天
        this.initCalendar(preMonthFirstDate)
    }

    // 下个月
    nextMonth() {
        let date = new Date(`${this.state.currentYear}-${this.state.currentMonth}-${this.state.currentDay}`)
        let nextMonthFirstDate = new Date(this.getMonthFirstDate(new Date(date.setDate(33))));
        this.initCalendar(nextMonthFirstDate)
    }


    // 初始化日历
    initCalendar(currentDate) {

        let nowDate = currentDate ? currentDate : new Date();
        let nowMonthFirstDate = this.getMonthFirstDate(nowDate) // 获取当月1号日期
        let nowWeek = new Date(nowMonthFirstDate).getDay() ? new Date(nowMonthFirstDate).getDay() : 7; // 获取星期
        let newDateList = []; // 创建日期数组
        let startDay = 2 - nowWeek; // 开始日期的下标  以为 setDate(0)是上个月最后一天  所以是2-nowWeek

        let showDayLength = nowWeek < 6 ? 35 : 42;  // 如果5行能显示下一个月 就只显示5行
        // 循环处理 获取日历上应该显示的日期
        for (let i = startDay; i < startDay + showDayLength; i++) {
            let date = new Date(new Date(nowMonthFirstDate).setDate(i)); // 获取时间对象
            let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 小于9的数字前面加0
            let dayObject = {
                date: this.getDateString(date),
                day,
                className: '',
            }
            // new Date(str).toDateString() === new Date().toDateString()
            if (date.toDateString() === new Date().toDateString()) {
                dayObject.className = 'today'
            }
            newDateList.push(dayObject)
        }

        this.setState((pre) => {
            return {
                dayList: newDateList,
                currentDay: nowDate.getDate(),
                currentMonth: nowDate.getMonth() + 1 >= 10 ? nowDate.getMonth() + 1 : '0' + (nowDate.getMonth() + 1),
                currentYear: nowDate.getFullYear(),
            }
        })

    }

    renderHeader() {
        return (
            <div className='calendar-header'>
                <div className='calendar-header-left'>
                    <button onClick={this.preMonth}>LAST MONTH</button>
                </div>
                <div className='calendar-header-title'>
                    {this.state.currentMonth}---{this.state.currentYear}
                </div>
                <div className='calendar-header-right'>
                    <button onClick={this.nextMonth}>NEXT MONTH</button>
                </div>
            </div>
        )
    }

    renderBody() {
        return (
            <div className='calendar-body'>
                <div className='week-container'>
                    {this.state.weekList.map(week => {
                        return <div key={week.name} className={`week ${week.className}`}>{week.name}</div>
                    })}
                </div>
                <div className='day-container'>
                    {this.state.dayList.map((dayObject, index) => {
                        return <div key={index} className={`day ${dayObject.className}`}><span>{dayObject.day}</span></div>
                    })}
                </div>
            </div>
        )
    }

    // shouldComponentUpdate(props) {

    //     console.log(props)
    //     if (props.history != undefined) {
    //         console.log(props)
    //         console.log(props)
    //         let pathName = props.history.location.pathname
    //         // this.props.read(pathName)
    //         console.log(pathName)
    //     }

    // }


    render() {
        // console.log(this.props)
        console.log('Passed pops from APP can be retreived', this.props.passProps)
        return (
            <div className="cardFrame">
                <div className="card_calender">
                    {this.renderHeader()}
                    {this.renderBody()}
                </div>
            </div>

        )
    }
}