import React from 'react';
import './ViewSchedule.css'
export default function viewSchedule(props) {

    console.log(props)
    // how to get the TimeZone for Clock component..!!!!
    return (
        <>
            <div className="view-card">
                <div className="schedule-content">
                    <ul>
                        {props.ScheduleList.value && props.ScheduleList.scheduleList.map((item, index) =>
                            <li key={index} >{item}</li>)}
                    </ul>
                </div>
            </div>
        </>
    );
}