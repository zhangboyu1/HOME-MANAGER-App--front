import React from 'react';
import './ViewSchedule.css'
import ButtonDelete from './DeleteButton'


export default class viewSchedule extends React.Component {
    constructor(props) {
        super()

    }
    // how to get the TimeZone for Clock component..!!!!
    freshViewShcedule = () => {
        this.props.checkSchedule(this.props.ScheduleList.selectedDate)
        this.forceUpdate()

    }

    CloseViewSchedule = () => {
        this.props.closeViewSchdule(false)
    }

    // It semms like we need a little bit more......with date that schedule is generated from.
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