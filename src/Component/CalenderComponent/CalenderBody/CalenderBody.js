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
            setSchedule: 0
        }
    }

    checkSchedule = (e) => {
        console.log(e)
        console.log(e.target.value)
        //此时a就应该打开modal了。。。。
        const isOpenModal = OpenModal(e.target.value) // 在OpenModal 里应该进行数据检索。。。并返回是否应该打开Modal。。
        console.log(isOpenModal)
    }

    setSchedule = (e) => {
        this.setState({
            setSchedule: 1
        })
    }


    render() {
        let arry1 = [], arry2 = [];
        const { month, year, monthDays, weekDays, day } = this.props
        // console.log('Now its in the calender boday------------')
        // console.log(monthDays, weekDays, day)
        for (var i = 0; i < weekDays; i++) {
            arry1[i] = i;
        }
        for (var j = 0; j < monthDays; j++) {
            arry2[j] = (j + 1);
        }
        var node1 = arry1.map(function (item) { return <li></li> })
        var node2 = arry2.map(function (item) {
            return (day === item) ?
                <li style={{ "background-color": "#eee" }}>
                    <button className="checkSchel" value={`${item}-${month}-${year}`} onClick={this.checkSchedule}>
                        {item}
                    </button>
                </li>
                :
                <li>
                    <button className="checkSchel" value={`${item}-${month}-${year}`} onClick={this.checkSchedule}>
                        {item}
                    </button>
                </li>
        }.bind(this))
        return (
            <div className="BodyBoder">
                <button className="setSchedule" onClick={this.setSchedule} />
                <ScheduleModal />
                <ViewScheduleModal />
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