import React from 'react';
import { data } from '../Store/localStorage';
import { Redirect } from "react-router-dom";
import NaviSide from '../NaviSide/NaviSide'

export default class Home extends React.Component {

    constructor(props) {
        super()
        this.state = {
            Login: false
        }
    }

    componentWillMount() {
        console.log('will mount')
        // console.log(this.state.Login)
        this.props.upDateLocal()
        if (this.props.history.action != 'POP') {
            if (this.props.location.state === null) {
                console.log('不应该执行么？')
                this.setState({
                    Login: true
                })
                return
            } if (this.props.location.state.type === "AUTH_SUCCESS") {
                console.log('第一次login')
                this.setState({
                    Login: true
                })
            }
        }
        return
    }

    componentDidMount() {
        console.log('did mount')
        console.log(this.props)
    }

    render() {
        console.log('render')
        return (
            <>

                {
                    this.state.Login ? <div >
                        <h1>This is Home</h1>
                    </div> : <Redirect to="/Login" />
                }
            </>
        )
    }
}