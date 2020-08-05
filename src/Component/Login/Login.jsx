import React from 'react';
import axios from "axios";
import './LogIn.css';
import { auth } from '../Store/Auth';
import { Link } from 'react-router-dom';
import { checkInputValidity } from '../Store/Inputvalidity'

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
            },
            password: {
                validation: {
                    required: true,
                },
                valid: false,
                value: '',
                cssClass: '',
            },
            errorMessage: ''
        }
    }

    checkAuth = (user_, password_, isSignup_) => {
        let isAuth = auth(user_, password_, isSignup_);
        console.log(isAuth)
        isAuth.type === 'AUTH_SUCCESS'
            && this.props.history.push('/', isAuth)
            && this.props.upDateLocal()
            || isAuth.type === 'AUTH_FAIL' &&
            (this.setState({
                errorMessage: isAuth.error
            }))
    }

    onType = (e) => {
        let updatedFormElement = {
            ...this.state[e.target.name]
        };
        let { errorMessage } = this.state

        !errorMessage || errorMessage && this.setState({ errorMessage: '' })
        updatedFormElement.cssClass = '';
        let Valid_result = checkInputValidity(e.target.value, updatedFormElement.validation);
        console.log(Valid_result)
        this.Valid_result = Valid_result
        this.Valid_result && (updatedFormElement.cssClass = 'color-green') || !this.Valid_result && (updatedFormElement.cssClass = 'color--red')
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
            this.setState({
                [e.target.name]: updatedFormElement
            })

        }
    }

    handleSubmit = (event) => {
        var isSignUp
        event.preventDefault()
        let { user, password } = this.state
        var isSignUp = false
        this.isValid
            && (this.props.location.pathname === "/login" && this.checkAuth(user.value, password.value, isSignUp)) ||
            this.props.location.pathname === '/sub-sign-up' && (this.props.location.state.type === `ADD_SUCCESS` || false) && (isSignUp = true) || this.checkAuth(user.value, password.value, isSignUp)

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
                                        className={this.state.user.cssClass}></input>
                                </div>
                                {user.cssClass === "color--red" &&
                                    <p className="font--red">Not valid format </p>}

                                {user.cssClass === "color-green" &&
                                    <p className="font--green">Correct email format </p>}

                                <div className="Signup-form-field flex flex__column">
                                    <label htmlFor="password">Password: </label>
                                    <input name="password" type="password" placeholder="Password"
                                        value={password.value}
                                        onChange={this.onType}></input>
                                </div>
                                {errorMessage === '' ||
                                    <p className='errorMassage'>
                                        {errorMessage}
                                    </p>
                                }
                                <button className="submit-btn login-btn" onClick={this.handleSubmit}>Login</button>
                                <div className="other-signup-field">
                                    <span>or sign up with</span>
                                </div>
                            </form>
                            <div className="switchToSignup">
                                <p>Don't have an account ?</p>
                                <Link to='/sign-up' className="switchSignup"><p>Sign Up</p></Link>
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