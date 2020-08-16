import React from 'react';
import './ViewSchedule.css'
import ButtonDelete from './DeleteButton'

export default class viewSchedule extends React.Component {
    constructor(props) {
        super()

    }
    // how to get the TimeZone for Clock component..!!!!
    freshViewShcedule = (_deletePackage) => {
        const { schedules_DATE } = _deletePackage
        this.props.checkSchedule(schedules_DATE)
        this.forceUpdate()

    }

    CloseViewSchedule = () => {
        this.props.closeViewSchdule(false)
    }

    render() {

        console.log(this.props.ScheduleList)
        console.log('now the view card is re-rendered')
        return (
            <>
                <div className="view-card">
                    <button className="close-btn" onClick={this.CloseViewSchedule}> x</button>
                    <div className="schedule-content">
                        <ul>
                            {this.props.ScheduleList && this.props.ScheduleList.map((item, index) =>
                                (<li key={index} >
                                    {item.schedules_CONTENT}
                                    <ButtonDelete freshViewShcedule={this.freshViewShcedule} deleteItem={item} deleteDate={this.props.ScheduleList.selectedDate} />
                                </li>)
                            )}
                        </ul>
                    </div>
                </div>
            </>
        );
    }

}