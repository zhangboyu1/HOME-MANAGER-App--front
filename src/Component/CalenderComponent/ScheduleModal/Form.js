import React from 'react';


export default class ScheduleModal extends React.Component {

    constructor(props) {
        super()
        this.state = {
            msg: '',
            date: '29-9-2020'
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
        const { msg, date } = this.state;
        this.props.addList(msg, date);
        this.setState(
            { msg: '' }
        )
    }

    render() {
        return (

            <div className="schedule-content">
                <div className="InputSection">
                    <form action='/' onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.msg} onChange={this.typeIn} />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>

        );
    }
}




