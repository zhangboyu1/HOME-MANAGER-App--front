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
        const checkResult = checkStore(App_OnlyMake)
        this.checkResult = checkResult
        const isLogin = LoginCheck()
        this.setState({
            Login: isLogin.value
        })
    }

    render() {
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