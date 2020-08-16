import React from 'react';
import Lii from './Lii/Lii'
import Form from './Form'
import { StoreSchedule } from '../../Store/ModalOperation'

import './ScheduleModal.css'
export default class ScheduleModal extends React.Component {
    constructor(props) {
        super()
        this.state = {
            msgArr: [],
            infoPackage: {},
        }
    }

    async NewSchedule(_m, _d, _infoPackage) {

        const isNew = await StoreSchedule(_m, _d, _infoPackage)

        let msgArr = _infoPackage[_d]
        if (isNew !== undefined && isNew.value) {
            this.setState({ msgArr, _infoPackage })
            this.props.setSchedule(_d)
        }
    }

    addList1 = (m, d) => {
        const { msgArr, infoPackage } = this.state;
        msgArr.push(m)
        infoPackage[d] = msgArr
        this.NewSchedule(m, d, infoPackage)
    }

    SetSchedule = () => {
        this.props.closeSetSchdule(false)
    }

    render() {
        const { msgArr, infoPackage } = this.state;
        return (
            <div className="sub-card">
                <button className="close-btn" onClick={this.SetSchedule}> x</button>
                <div className="schedule-content">
                    <Form addList={this.addList1} />
                    <ul>
                        {msgArr.map((element, index) => <Lii element={element} key={index} />)}
                        <Lii />
                    </ul>
                </div>
            </div>
        );
    }
}