import React from 'react';
import axios from "axios";
import './LogIn.css';


import { auth } from '../Store/Auth'



export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // username: '',
            // typePass: '',
            // logInState: 0
            user: {
                validation: {
                    required: true,
                    isEmail: true
                },
                errorMessage: {
                    email: "Not valid Email",
                    required: 'Email is required',
                },
                valid: false,
                value: '',
                cssClass: '',
            },

            password: {
                validation: {
                    required: true,
                },
                errorMessage: {
                    required: 'Password is required',
                },
                valid: false,
                value: '',
                cssClass: '',
            },
        }
    }


    checkValidity(value, validationRules) {

        let isValid = true;
        if (!validationRules) {
            return true;
        }
        if (validationRules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        // if (validationRules.minLength) {
        //     isValid = value.length >= rules.minLength && isValid
        // }
        // if (validationRules.maxLength) {
        //     isValid = value.length <= rules.maxLength && isValid
        // }
        if (validationRules.isEmail) {
            console.log("Now the email formating validation starts:")
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            console.log(pattern.test(value))
            isValid = pattern.test(value) && isValid

            console.log(isValid)

        }
        if (validationRules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        console.log(isValid)
        return isValid;
    }


    onType = (e) => {
        // console.log(e.target.value)
        //通过判断e.target.name来区分input框 ：
        const updatedFormElement = {
            ...this.state[e.target.name]
        };
        let isValid = this.checkValidity(e.target.value, updatedFormElement.validation);
        this.isValid = isValid
        if (!isValid) {
            updatedFormElement.cssClass = 'color--red';
            console.log('the email format is not correct!')
        } else {
            updatedFormElement.cssClass = '';
        }
        updatedFormElement.value = e.target.value;
        this.setState({ [e.target.name]: updatedFormElement });
    }


    handleSubmit = (event) => {
        event.preventDefault()
        // SHould post user info to the server side to register and checked login
        let { user, password } = this.state
        console.log('Check validation:', this.isValid)
        if (this.isValid) {
            console.log('Now the user & password is successfully inputed..Now it should be passing to validated by Authorization.')
            console.log(user, password)
            //Need an Authorization function.....abbr for onAuth.....
            let isAuth = auth(user.value, password.value, false);
            if (isAuth.type === 'AUTH_SUCCESS') {
                this.props.history('/')
            }
        }
        // if (username == 'user' && typePass == 123) {
        //     logInState = 1;
        //     this.setState({ logInState },
        //         () => {
        //             this.props.checkLogIn(logInState)
        //         }
        //     )
        // }
    }

    render() {
        const { user, password } = this.state
        return (
            <>
                <div className='login-container'>
                    <div className='login-wrapper'></div>
                    <div className="login-card">
                        <form className="login-form" action='/' onSubmit={this.handleSubmit}>
                            <fieldset>
                                <legend>Login-</legend>
                                <label for="fname">Username:</label>
                                <input type="text" name="user" value={user.value} onChange={this.onType} />

                                <label for="fname">Password:</label>
                                <input type="password" name="password" value={password.value} onChange={this.onType} />
                                <input className="submit" type="submit" value="submit" />
                            </fieldset>
                        </form>
                    </div>

                </div>

            </>

        )
    }
}