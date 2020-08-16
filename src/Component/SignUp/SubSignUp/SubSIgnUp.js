import React from 'react';
import '../SignUp.css'
import './SubSignUp.css'
import { addUser } from '../../Store/AddUser'
// import axios from 'axios';

export default class SubSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            users: {},
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async AddUser(_profileContent) {
        console.log(_profileContent)
        let addResult = await addUser(_profileContent)
        console.log(addResult)
        if (addResult.type === 'ADD_SUCCESS') {
            console.log('transfer to the next page~~!')
            alert(addResult.content)
            this.props.history.push('/login', _profileContent)
        } else {
            alert("Something is wrong....~~~~")
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const profileContent = {
            ...this.props.location.state,
            ...this.state
        }

        console.log(profileContent)
        this.AddUser(profileContent)
        console.log(this.props)
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        console.log(this.props)
        // const { suggestions, onSpecialChange, onClear } = this.props;
        return (
            <div className="Signup_Background">
                <div className="Signup__Container">
                    <div className="Signup flex flex__column">
                        <div className="subpage-title-box">
                            <h4 id="title">Welcome Home Manger</h4>
                        </div>

                        <div className="Signup-body">
                            <form className="Signup-form flex flex__column">
                                <p id="profile--content">Set up Your Profile</p>
                                <div className="Signup-form-field flex flex__column">
                                    <label>First Name</label>
                                    <input name="firstName" placeholder="First Name" onChange={this.onChange} autoComplete="off"
                                        value={this.state.firstName}></input>
                                    {<div style={this.state.firstName ? { display: 'none' } : { color: 'red' }}>Please enter a valid firstName</div>}
                                </div>
                                <div className="Signup-form-field flex flex__column">
                                    <label>Last Name</label>
                                    <input name="lastName" placeholder="Last Name" value={this.state.lastName} autoComplete="off"
                                        onChange={this.onChange}></input>
                                    {<div style={this.state.lastName ? { display: 'none' } : { color: 'red' }}>Please enter a valid lastName</div>}
                                </div>
                                <div className="Signup-form-field flex flex__column">
                                    <label>Enter your work-title</label>
                                    <input placeholder="Enter a title" name="title" autoComplete="off" value={this.state.title} onChange={(e) => {
                                        this.setState({ [e.target.name]: e.target.value })
                                    }} />
                                    {<div style={this.state.title ? { display: 'none' } : { color: 'red' }}>Please enter a valid title</div>}

                                </div>
                                <button className="submit-btn" onClick={this.handleClick}>Finish</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}