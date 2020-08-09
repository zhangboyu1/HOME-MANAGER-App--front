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
            isStore: false
        }
    }


    addList1 = (m, d) => {
        const { msgArr, infoPackage } = this.state;
        msgArr.push(m)
        infoPackage[d] = msgArr
        const isStore = StoreSchedule(m, d, infoPackage)

        // It should have a judgement ......
        this.props.setSchedule(d)
        if (isStore.type === 'OPEN_SUCCESS') {
            this.setState({ msgArr, infoPackage, isStore })
        }
    }

    render() {
        const { msgArr, infoPackage } = this.state;

        console.log(infoPackage)
        return (
            // <div className="cardFrame">
            <div className="sub-card">
                <div className="schedule-content">
                    <Form addList={this.addList1} />
                    <ul>
                        {msgArr.map((element, index) => <Lii element={element} key={index} />)}
                        <Lii />
                    </ul>
                </div>
            </div>
            // </div>
        );
    }
}