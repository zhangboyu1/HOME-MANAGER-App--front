/* eslint-disable no-loop-func */
import React, { Component } from 'react';
import './CalenderBody.css';
//最后一步了，引入navLink让页面动起来。。。。
import { OpenModal, CheckMarkedDay } from '../../Store/ModalOperation';
import ScheduleModal from '../ScheduleModal/ScheduleModal';
import ViewScheduleModal from '../ViewSchedule/ViewSchedule';

export default class CalenderBody extends Component {
    constructor(props) {
        super();
        this.state = {
            setSchedule: 0,
            OpenModalResult: [],
            date: '',
            markeday: 0,
            isSetSchedule: false,
            isViewSchedule: false,
        }
    }

    async ViewSchdule(_passedDate) {
        let { OpenModalResult } = this.state
        const isOpenModal = await OpenModal(_passedDate)
        if (isOpenModal.value) {
            OpenModalResult = isOpenModal.scheduleList
            this.setState({
                OpenModalResult,
                isViewSchedule: true
            })
        } else {
            this.setState({
                isViewSchedule: false,
            })
        }
    }

    checkSchedule = (e) => {
        const passedDate = e.target !== undefined ? e.target.value : e
        this.ViewSchdule(passedDate)
        let { month, year, day } = this.props
        this.props.initCalendar(year, month, day)
    }

    setSchedule = (_date) => {
        // 这个是获得了本次的MARKDATE......
        let { markeday } = this.state
        markeday = _date
        this.setState({
            markeday
        })
    }

    isSetSchedule = () => {
        this.setState({
            isSetSchedule: true
        })
    }

    closeSetSchdule = (_claseAction) => {
        let { isSetSchedule, markeday } = this.state
        isSetSchedule = _claseAction
        markeday = 0
        this.setState({
            isSetSchedule, markeday
        })
    }

    closeViewSchdule = (_claseAction) => {
        let { isViewSchedule } = this.state
        isViewSchedule = _claseAction
        this.setState({
            isViewSchedule
        })
    }

    render() {
        let arry1 = [], arry2 = [];
        let { month, year, monthDays, weekDays, day, retrieveDayArr } = this.props
        let { OpenModalResult, date, markeday, isSetSchedule, isViewSchedule } = this.state
        console.log(retrieveDayArr)
        markeday && retrieveDayArr.push(markeday)
        console.log(retrieveDayArr)
        for (var i = 0; i < weekDays; i++) {
            arry1[i] = i;
        }
        for (var j = 0; j < monthDays; j++) {
            // 在这个数组中添加参数。。。。
            arry2.push({
                value: j + 1,
                date: `${j}-${month}-${year}`,
                mark: 'unmarked'
            })
            for (const item of retrieveDayArr) {
                if (`${j}-${month}-${year}` === item) {
                    arry2[j - 1].mark = 'marked'
                }
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
                {isSetSchedule && <ScheduleModal setSchedule={this.setSchedule} closeSetSchdule={this.closeSetSchdule} />}
                {isViewSchedule && <ViewScheduleModal
                    ScheduleList={OpenModalResult}
                    checkSchedule={this.checkSchedule}
                    closeViewSchdule={this.closeViewSchdule}
                />}
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