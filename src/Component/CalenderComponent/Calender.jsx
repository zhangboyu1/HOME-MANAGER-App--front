import React from 'react';
import './Calender.css'


export default class CalenderCard extends React.Component {

    constructor(props) {

        super(props)
    }


    render() {
        return (

            <div className="cardFrame">
                <div className="card_calender">
                    <div className="div1"></div>
                    <div className="div2"></div>
                </div>
            </div>
        )
    }
}