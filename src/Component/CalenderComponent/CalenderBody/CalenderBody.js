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
            markeday: []
        }
    }

    checkSchedule = (e) => {
        let { OpenModalResult } = this.state
        //此时a就应该打开modal了。。。。
        const isOpenModal = OpenModal(e.target.value) // 在OpenModal 里应该进行数据检索。。。并返回是否应该打开Modal。。
        OpenModalResult = isOpenModal
        this.setState({
            OpenModalResult
        })
    }

    setSchedule = (_date) => {
        let { date, markeday } = this.state
        date = _date
        markeday = _date.substring(0, 1)
        this.setState({
            date, markeday
        }, () => {
            console.log(this.state.date)
        })
        // 下一个问题如何根据给定的日期来给当前日历做markUp
    }

    render() {
        let arry1 = [], arry2 = [];
        const { month, year, monthDays, weekDays, day } = this.props
        const { OpenModalResult, date, markeday } = this.state
        console.log(date.substring(0, 1))
        console.log(markeday)

        //Now获取天数。。。。

        // console.log('Now its in the calender boday------------')
        // console.log(monthDays, weekDays, day)
        for (var i = 0; i < weekDays; i++) {
            arry1[i] = i;
        }
        for (var j = 0; j < monthDays; j++) {
            // 在这个数组中添加参数。。。。
            if (j === Number(markeday)) {
                arry2[j] = {
                    value: j + 1,
                    mark: 'marked'
                }
            } else {
                arry2[j] = {
                    value: j + 1,
                    mark: 'unmarked'
                }
            }
        }

        var node1 = arry1.map(function (item) { return <li></li> })
        var node2 = arry2.map(function (item) {
            return (day === item) ?
                <li style={{ "background-color": "#eee" }}>
                    <button className={item.mark === 'marked' ? `checkSchel scheduleMarked` : "checkSchel"} value={`${item}-${month}-${year}`} onClick={this.checkSchedule}>
                        {item.value}
                    </button>
                </li>
                :
                <li>
                    <button className={item.mark === 'marked' ? `checkSchel scheduleMarked` : "checkSchel"} value={`${item}-${month}-${year}`} onClick={this.checkSchedule}>
                        {item.value}
                    </button>
                </li>
        }.bind(this))
        return (
            <div className="BodyBoder">
                <button className="setSchedule" onClick={this.setSchedule} />
                <ScheduleModal setSchedule={this.setSchedule} />
                <ViewScheduleModal ScheduleList={OpenModalResult} />
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