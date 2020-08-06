import React from 'react';
import { data } from '../Store/localStorage';
import { Redirect } from "react-router-dom";
import { checkStore } from '../Store/localStorage'
import { LoginCheck } from '../Store/LoginCheck/LoginCheck'
const App_OnlyMake = 'boyu_mark';
export default class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            Login: 0,
        }
    }

    componentWillMount() {
        // console.log(this.state.Login)
        this.props.upDateLocal()
        const checkResult = checkStore(App_OnlyMake)
        this.checkResult = checkResult
        const isLogin = LoginCheck()
        // this.isLogin = isLogin
        console.log(isLogin)
        this.setState({
            Login: isLogin.value
        })
    }

    componentDidMount() {
        console.log('did mount')
        console.log(this.props)
    }

    render() {
        console.log(this.state.login)
        return (
            <>
                {
                    this.state.Login ? <div >
                        <h1>This is Home</h1>
                    </div> : <Redirect to="/login" />
                }
            </>
        )
    }
}