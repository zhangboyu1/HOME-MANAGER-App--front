import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { data } from '../../Store/localStorage';

export default class ScheduleModal extends React.Component {

    constructor(props) {
        super()
        this.state = {
            msg: '',
            startDate: new Date(),
            transformedDate: ''
        }
    }

    typeIn = (e) => {
        const msg = e.target.value
        this.setState(
            { msg }
        )
    }

    handleSubmit = event => {
        event.preventDefault()
        const { msg, transformedDate } = this.state;
        this.props.addList(msg, transformedDate);
        this.setState(
            {
                msg: '',
                transformedDate: ''
            }
        )
    }

    setStartDate = date => {
        //把date处理了。。。。
        let { startDate, transformedDate } = this.state
        if (date) {
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();
            let transformedDate = [day, month, year].join('-')
            this.setState({
                transformedDate
            })
        }
        startDate = date
        this.setState({
            startDate
        }, () => {
            console.log(this.state.transformedDate)
        });

    };

    render() {
        return (

            <div className="schedule-content">
                <div className="InputSection">
                    <form action='/' onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.msg} onChange={this.typeIn} />
                        <DatePicker
                            dateFormat="d-MM-yyyy"
                            selected={this.state.startDate}
                            onChange={this.setStartDate}
                            isClearable
                            placeholderText="I am clean.."
                        />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>

        );
    }
}




