import React from 'react';
import axios from "axios";
import './LogIn.css';
import { auth } from '../Store/Auth';
import { Link } from 'react-router-dom';


export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
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


    checkValidity(value, rules) {

        let isValid = true;
        if (!rules) {
            return true;
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }
        if (rules.isEmail) {
            const pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
            isValid = pattern.test(value) && isValid
            // invaild pattern format cause warning, double check with it
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

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
            console.log('the  format is correct!')
            updatedFormElement.cssClass = '';
        }
        updatedFormElement.value = e.target.value;
        this.setState({ [e.target.name]: updatedFormElement });
    }

    checkAuth = (user_, password_, isSignup_) => {
        let isAuth = auth(user_, password_, isSignup_);
        console.log(isAuth)
        if (isAuth.type === 'AUTH_SUCCESS') {
            this.props.history.push('/', isAuth)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // SHould post user info to the server side to register and checked login
        let { user, password } = this.state
        var isSignUp = false
        console.log('Check validation:', this.isValid)
        if (this.isValid) {
            console.log('Now the user & password is successfully inputed..Now it should be passing to validated by Authorization.')
            console.log(user, password)
            //Need an Authorization function.....abbr for onAuth.....

            console.log(this.props.location)

            if (this.props.location.pathname === "/Login") {
                console.log('123')
                this.checkAuth(user.value, password.value, isSignUp)
            } if (this.props.location.pathname === '/sub-sign-up') {
                if (this.props.location.state.type === `ADD_SUCCESS` || false) {
                    var isSignUp = true
                }
                this.checkAuth(user.value, password.value, isSignUp)
            }
        }

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
                        <div className="switchToSignup">
                            <p>Don't have an account ?</p>
                            <Link to='/sign-up' className="switchSignup"><p>Sign Up</p></Link>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}