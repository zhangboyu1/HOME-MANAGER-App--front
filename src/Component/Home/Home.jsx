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
            ScheduleDate: '04/02/2020',
            inputinfo: ''

        }
    }

    componentWillMount() {

        console.log('will mount')
        console.log(this.props)
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
        this.props.upDateHomeInfo(this.state.ScheduleDate)
    }




    onType = (e) => {

        let { inputinfo } = this.state
        inputinfo = e.target.value;
        this.setState({
            inputinfo
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //我要读值了。。。。。、
        const { inputinfo } = this.state;
        this.props.upDateHomeInfo(inputinfo)
    }

    render() {
        console.log(this.state.login)
        const { inputinfo } = this.state

        return (
            <>
                {
                    this.state.Login ?
                        <div >
                            <div className="">
                                <form className="">
                                    <div className="">
                                        <label htmlFor="email">Email: </label>
                                        <input name="user" placeholder="Email"
                                            value={inputinfo}
                                            onChange={this.onType}
                                        >
                                        </input>
                                    </div>

                                    <button className="submit-btn login-btn" onClick={this.handleSubmit}>Login</button>
                                </form>

                            </div>
                        </div> : <Redirect to="/login" />
                }
            </>
        )
    }
}