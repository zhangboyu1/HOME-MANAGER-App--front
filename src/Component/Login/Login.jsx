import React from 'react';
import axios from "axios";
import './Login.css';
import { auth } from '../Store/Auth';
import { Link } from 'react-router-dom';
import { checkInputValidity } from '../Store/Inputvalidity';

export default class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                validation: {
                    result: true,
                    isEmail: true
                },
                valid: false,
                value: '',
                cssClass: '',
                InputCssClass: '',
                InputWarning: ''
            },
            password: {
                validation: {
                    required: true,
                },
                valid: false,
                value: '',
                cssClass: '',
                InputCssClass: '',
                InputWarning: ''
            },
            errorMessage: ''
        }
    }

    async checkAuth(_user, _password, _isSignup) {
        let isAuth = await auth(_user, _password, _isSignup);
        if (isAuth.type === 'AUTH_SUCCESS') {
            this.props.history.push('/', isAuth)
            this.props.upDateLocal(isAuth)
            return
        }
        this.setState({
            errorMessage: isAuth.error
        })
    }

    onType = (e) => {
        const updatedFormElement = {
            ...this.state[e.target.name]
        };
        let { errorMessage } = this.state
        !errorMessage || errorMessage && this.setState({ errorMessage: '' })
        updatedFormElement.cssClass = '';
        let Valid_result = checkInputValidity(e.target.value, updatedFormElement.validation);
        console.log(Valid_result)
        this.Valid_result = Valid_result
        this.Valid_result && (updatedFormElement.cssClass = 'color-green') && (updatedFormElement.InputCssClass = 'font--green') && (updatedFormElement.InputWarning = 'formate is correct!')
            || !this.Valid_result && (updatedFormElement.cssClass = 'color--red') && (updatedFormElement.InputCssClass = 'font--red') && (updatedFormElement.InputWarning = 'formate is not correct!')
        updatedFormElement.value = e.target.value;
        this.setState({ [e.target.name]: updatedFormElement });
    }

    inputOnBlur = (e) => {
        const updatedFormElement = {
            ...this.state[e.target.name]
        };
        if (updatedFormElement.cssClass === 'color--red') {
            console.log('this is red warning')
            updatedFormElement.value = ''
            updatedFormElement.cssClass = ''
            updatedFormElement.InputCssClass = ''
            updatedFormElement.InputWarning = ''
            this.setState({
                [e.target.name]: updatedFormElement
            })

        }
    }

    handleInputFocus = (e) => {
        const updatedFormElement = {
            ...this.state[e.target.name]
        };
        console.log('I am focused')
        if (updatedFormElement.value === '') {
            updatedFormElement.cssClass = 'color--red';
            updatedFormElement.InputWarning = 'Cannot leave it blank';
            updatedFormElement.InputCssClass = 'font--red'
            this.setState({
                [e.target.name]: updatedFormElement,
                errorMessage: ''
            })
        } else {
            return
        }
    }

    handleSubmit = (event) => {
        var isSignUp
        event.preventDefault()
        let { user, password } = this.state
        isSignUp = false
        this.isValid
            && (this.props.location.pathname === "/login" && this.checkAuth(user.value, password.value, false)) ||
            this.props.location.pathname === '/sub-sign-up' && (this.props.location.state.type === `ADD_SUCCESS` || false) && (isSignUp = true) || this.checkAuth(user.value, password.value, false)

    }
    render() {
        const { user, password, errorMessage } = this.state
        return (
            <>
                <div className="Signup_Background">
                    <div className="Signup flex flex__column">
                        <div className="title-box">
                            <p>Sign In</p>
                        </div>

                        <div className="Signup-body">
                            <form className="Signup-form flex flex__column">
                                <div className="Signup-form-field flex flex__column">
                                    <label htmlFor="email">Email: </label>
                                    <input name="user" placeholder="Email"
                                        value={user.value}
                                        onChange={this.onType}
                                        onBlur={this.inputOnBlur}
                                        onFocus={this.handleInputFocus}
                                        className={user.cssClass}>
                                    </input>
                                    <div className={`inputWarning ${user.InputCssClass}`}>{user.InputWarning}</div>
                                </div>

                                <div className="Signup-form-field flex flex__column">
                                    <label htmlFor="password">Password: </label>
                                    <input name="password" type="password" placeholder="Password"
                                        value={password.value}
                                        onBlur={this.inputOnBlur}
                                        onChange={this.onType}
                                        onFocus={this.handleInputFocus}
                                        className={password.cssClass}>
                                    </input>
                                    {
                                        <div className={`inputWarning ${password.InputCssClass === "font--red" ? password.InputCssClass : ''}`}>
                                            {password.InputCssClass === "font--red" ? password.InputWarning : ''}
                                        </div>
                                    }
                                </div >
                                <div className={`warningDiv ${errorMessage ? 'errorMessage' : ''}`}>
                                    {errorMessage}
                                </div>
                                <button className="submit-btn login-btn" onClick={this.handleSubmit}>Login</button>
                                <div className="other-signup-field">
                                    <span>or sign up with</span>
                                </div>
                            </form>
                            <div className="switchToSignup">
                                <p>Don't have an account ? </p>
                                <Link to='/sign-up' className="switchSignup"><span> Sign Up </span></Link>
                            </div>
                        </div>
                    </div>


                    {/* <div className='login-container'>
                    <div className='login-wrapper'></div>
                    <div className="Signup-body">

                    </div>
                    <div className="login-card">
                        <form className="login-form" action='/' >

                            <legend>Login-</legend>
                            <label for="fname">Username:</label>
                            <input type="text" name="user" value={user.value} onChange={this.onType} />

                            <label for="fname">Password:</label>
                            <input type="password" name="password" value={password.value} onChange={this.onType} />

                            <button className="submit" onClick={this.handleSubmit} ><span>NEXT</span></button>
                        </form>
                        <div className="switchToSignup">
                            <p>Don't have an account ?</p>
                            <Link to='/sign-up' className="switchSignup"><p>Sign Up</p></Link>
                        </div>
                    </div> */}
                </div>
            </>
        )
    }
}