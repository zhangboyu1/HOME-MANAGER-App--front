import React from 'react';
import axios from "axios";

export default class Login extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            username: '',
            typePass: '',
            logInState: 0
        }
    }

    typeUser = (e) => {
        // console.log(e.target.value)
        const username = e.target.value
        this.setState(
            { username }
        )
    }

    typePass = (e) => {
        // console.log(e.target.value)
        const typePass = e.target.value
        this.setState(
            { typePass }
        )
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // SHould post user info to the server side to register and checked login
        let { logInState, username, typePass } = this.state
        console.log(username, typePass)

        if (username == 'user' && typePass == 123) {
            logInState = 1;
            this.setState({ logInState },
                () => {
                    this.props.checkLogIn(logInState)
                }
            )
        }

    }

    render() {
        return (
            <>
                <div className='login-container'>
                    <div className='login-wrapper'></div>
                    <div className="login-card">
                        <form className="login-form" action='/' onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>Login-</legend>
                                <label for="fname">Username:</label>
                                <input type="text" value={this.state.username} onChange={this.typeUser} />
                                <label for="fname">Password:</label>
                                <input type="password" value={this.state.password} onChange={this.typePass} />
                                <input className="submit" type="submit" value="submit" />
                            </fieldset>

                        </form>
                    </div>

                </div>

            </>

        )
    }
}