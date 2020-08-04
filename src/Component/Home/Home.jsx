import React from 'react';
import NaviSide from '../NaviSide/NaviSide';
import { data } from '../Store/localStorage';

export default class Home extends React.Component {

    constructor(props) {
        super()

    }


    upDateProfile = (LastName_, firstName_, title_) => {
        this.LastName = LastName_;
        this.firstName = firstName_;
        this.title = title_;
    }

    componentDidUpdate() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('will mount')
    }


    render() {
        data.get('currentUser')
        // console.log(this.props)
        // if (this.props.location.state != undefined) {
        //     console.log('111111111111111111')
        //     let { LastName, firstName, title } = this.props.location.state.userId
        //     console.log(this.props.location.state.userId)
        //     this.upDateProfile(LastName, firstName, title)
        // }

        // console.log()
        // console.log(this.LastName, this.firstName, this.title)

        return (
            <div >
                <h1>This is Home</h1>
            </div>


        )
    }
}