import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css'
import { auth } from '../Store/Auth';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                validation: {
                    required: true,
                    isEmail: true
                },
                errorMessage: {
                    email: "Not valid Email",
                    required: "Email is not required"
                },
                valid: false,
                value: '',
                cssClass: '',
            },
            password: {
                elementConfig: {
                    placeholder: ''
                },
                validation: {
                    minLength: 9,
                    maxLength: 25,
                    required: true
                },
                errorMessage: {
                    minLength: "The password is too short",
                    maxLength: "The password is too long",
                    required: 'Password is required',
                },
                valid: false,
                value: "",
                cssClass: ""
            },
            checked: false,
            images: "",
            errorClass: "no-active",
            errormsg: false,
            errormsgClass: "no-active",
            showPasswordCheckBox: false,
        }
        this.isValid = false
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
        }
        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }


    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        const updatedFormElement = {
            ...this.state[e.target.name]
        };
        let isValid = this.checkValidity(e.target.value, updatedFormElement.validation);
        this.isValid = isValid
        if (!isValid) {
            updatedFormElement.cssClass = 'color--red';
        } else {
            updatedFormElement.cssClass = '';
        }
        updatedFormElement.value = e.target.value;
        this.setState({ [e.target.name]: updatedFormElement });
    };

    async AUTHUSER(_user, _password) {

        let isAuth = await auth(_user, _password, true);
        if (isAuth.type === 'AUTH_SUCCESS') {
            this.props.history.push('/sub-sign-up', { userName: _user, password: _password })
        } else {
            alert(isAuth.error)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { user, password } = this.state;
        // Only for the front-end....NO back-end server..So only check with localStorage
        if (this.isValid) {
            this.AUTHUSER(user.value, password.value)
        }
    }


    changeCheckboxStatus = (e) => {
        this.state.checked === true ? this.setState({ checked: false, }) : this.setState({ checked: true, })
    }


    render() {
        const { user, password } = this.state
        return (
            <div className="Signup_Background">
                <div className="Signup__Container">
                    <div className="Signup flex flex__column">
                        <div id="title-box" className="title-box">
                            <p>Join us</p>
                        </div>
                        <div className="Signup-body">
                            <form className="Signup-form flex flex__column">
                                <div className="Signup-form-field flex flex__column">
                                    <label>Email: </label>
                                    <input id="email" name="user" placeholder="Email" value={user.value}
                                        onChange={this.onChange}></input>
                                </div>
                                <div className="Signup-form-field flex flex__column ">
                                    <label>Password: </label>
                                    <input id="password" name="password" type="password" placeholder="Password"
                                        value={password.value} onChange={this.onChange} />
                                    {/* <div className={this.state.showPasswordCheckBox ? '' : 'componentUnVisible'}><PasswordStrengthChecker password={this.state.password} /></div> */}
                                </div>

                                <div style={{ color: 'red' }} className={this.state.errormsg ? 'errorClass' : 'no-active'}>Email or Password is required</div>
                                <div style={{ color: 'red' }} className={this.state.errorClass}>The user has already existed</div>
                                <button className="submit-btn" onClick={this.handleSubmit} ><span>NEXT</span></button>

                            </form>
                            <div className="switchToLogin flex">
                                <p>Already have an account ?</p>
                                <Link to='/login' className="switchLogin"><p>Log In</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}