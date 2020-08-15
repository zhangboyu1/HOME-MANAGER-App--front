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
            OpenModalResult: [],
            date: '',
            markeday: 0,
            isSetSchedule: false,
            isViewSchedule: false
        }
    }

    async ViewSchdule(_passedDate) {
        let { OpenModalResult } = this.state
        const isOpenModal = await OpenModal(_passedDate)

        console.log(isOpenModal)
        if (isOpenModal.value) {
            OpenModalResult = isOpenModal.scheduleList
            console.log(OpenModalResult)
            this.setState({
                OpenModalResult,
                isViewSchedule: true
            })
        }
    }

    checkSchedule = (e) => {
        //此时a就应该打开modal了。。。。
        const passedDate = e.target !== undefined ? e.target.value : e
        this.ViewSchdule(passedDate)
        this.props.markDayRetrieve()
    }

    setSchedule = (_date) => {
        let { date, markeday } = this.state
        date = _date
        markeday = Number(date.split('-')[0])
        console.log(markeday)
        ////每一次添加日期时。。。calender都会添加相应的日期。
        this.setState({
            date, markeday,
        }, () => {
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

        console.log(OpenModalResult)
        markeday && retrieveDayArr.push(markeday)
        for (var i = 0; i < weekDays; i++) {
            arry1[i] = i;
        }
        for (var j = 0; j < monthDays; j++) {
            // 在这个数组中添加参数。。。。
            arry2.push({
                value: j,
                mark: 'unmarked'
            })

            for (const item of retrieveDayArr) {
                if (j === item) {
                    console.log(item)
                    arry2[j].mark = 'marked'
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