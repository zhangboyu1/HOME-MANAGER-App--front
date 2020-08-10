/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import './CalenderBody.css';
//最后一步了，引入navLink让页面动起来。。。。
import { OpenModal } from '../../Store/ModalOperation';
import ScheduleModal from '../ScheduleModal/ScheduleModal';
import ViewScheduleModal from '../ViewSchedule/ViewSchedule';

export default class CalenderBody extends Component {
    constructor(props) {
        super();
        this.state = {
            setSchedule: 0,
            OpenModalResult: {},
            date: '',
            markeday: 0,
            isSetSchedule: false
        }
    }

    checkSchedule = (e) => {
        let { OpenModalResult } = this.state
        //此时a就应该打开modal了。。。。
        const isOpenModal = OpenModal(e.target.value) // 在OpenModal 里应该进行数据检索。。。并返回是否应该打开Modal。。
        console.log(isOpenModal)
        OpenModalResult = isOpenModal
        this.setState({
            OpenModalResult
        })
    }

    setSchedule = (_date) => {
        let { date, markeday } = this.state
        date = _date
        markeday = Number(date.split('-')[0])
        console.log(markeday)
        ////每一次添加日期时。。。calender都会添加相应的日期。
        this.setState({
            date, markeday
        }, () => {
        })
    }



    isSetSchedule = () => {

        this.setState({
            isSetSchedule: true
        })
    }

    closeSchdule = (_claseAction) => {
        let { isSetSchedule } = this.state
        isSetSchedule = _claseAction
        this.setState({
            isSetSchedule
        })
    }


    render() {
        let arry1 = [], arry2 = [];
        let { month, year, monthDays, weekDays, day, retrieveDayArr } = this.props
        const { OpenModalResult, date, markeday, isSetSchedule } = this.state
        markeday && retrieveDayArr.push(markeday)
        for (var i = 0; i < weekDays; i++) {
            arry1[i] = i;
        }
        for (var j = 0; j < monthDays; j++) {
            // 在这个数组中添加参数。。。。
            arry2.push({
                value: j + 1,
                mark: 'unmarked'
            })

            for (const item of retrieveDayArr) {
                if (j === item) {
                    console.log(item)
                    arry2[j - 1].mark = 'marked'
                }
                continue
            }
        }
        var node1 = arry1.map(function (item) { return <li></li> })
        var node2 = arry2.map(function (item) {
            return (day === item) ?
                <li style={{ "background-color": "#eee" }}>
                    <button className={item.mark === 'marked' ? `checkSchel scheduleMarked` : "checkSchel"} value={`${item.value}-${month}-${year}`} onClick={this.checkSchedule}>
                        {item.value}
                    </button>
                </li>
                :
                <li>
                    <button className={item.mark === 'marked' ? `checkSchel scheduleMarked` : "checkSchel"} value={`${item.value}-${month}-${year}`} onClick={this.checkSchedule}>
                        {item.value}
                    </button>
                </li>
        }.bind(this))
        return (
            <div className="BodyBoder">
                <button className="Schedule-btn" onClick={this.isSetSchedule} >SetSchedule</button>
                {isSetSchedule && <ScheduleModal setSchedule={this.setSchedule} closeSchdule={this.closeSchdule} />}
                {OpenModalResult.value && <ViewScheduleModal ScheduleList={OpenModalResult} />}
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