import React from 'react';
import axios from 'axios';

import '../SignUp.css'
import './SubSignUp.css'


export default class SubSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            suburb: "",
            checkStatusForDoneThing: false,
            CheckStatusForEarnMoney: false,
            users: {},
            isLoading: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }


    async handleClick(e) {
        // const { firstName, lastName, suburb } = this.state;
        // const addressList = suburb.split(",");
        // this.setState({ isLoading: true });
        // var _this = this;
        // const userId = localStorage.getItem("userId");
        // const token = localStorage.getItem("token");
        // const user = await axios.get(configuration.api.backend_api + `/api/v1/users/me${userId}/${token}`);
        // if (user.status === 200) {
        //     const users = {
        //         ...user.data,
        //         address: {
        //             suburb: addressList[0],
        //             state: addressList[1],
        //             country: "Australia",
        //         },
        //         name: {
        //             firstName, lastName
        //         },
        //         token,
        //         _id: userId,
        //     }
        //     axios.put(configuration.api.backend_api + `/api/v1/users/updateOne`, users).then(res => {
        //         _this.setState({ isLoading: false });
        //         localStorage.setItem("userName", firstName + " " + lastName);
        //         _this.props.history.push("/user");
        //     })
        // } else {
        //     this.props.history.push("/404");
        // }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    componentWillUpdate(nextProps, nextState) {
        if (this.state.suburb !== nextState.suburb) {
            var _this = this;
            _this.state = nextState
        }
    }
    render() {
        // const { suggestions, onSpecialChange, onClear } = this.props;
        return (
            <div className="Signup_Background">
                <div className="Signup__Container">
                    <div className="Signup flex flex__column">
                        <div className="subpage-title-box">
                            <p id="title">Welcome Home Manger</p>
                            <svg role="button" tabIndex="0" aria-label="close modal" className="modal_close_button__StyledCloseSimple-hpeofp-0 close-btn" width="24" height="24" viewBox="0 0 24 24" data-ui-test="modal-close-button"><path d="M13.17 12l6.41-6.42a.82.82 0 0 0-1.16-1.16L12 10.83 5.58 4.42a.82.82 0 0 0-1.16 1.16L10.83 12l-6.41 6.42a.8.8 0 0 0 0 1.16.8.8 0 0 0 1.16 0L12 13.17l6.42 6.41a.8.8 0 0 0 1.16 0 .8.8 0 0 0 0-1.16z"></path></svg>
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
                                    <label>Enter your home suburb</label>
                                    <input placeholder="Enter a suburb" name="suburb" autoComplete="off" value={this.state.suburb} onChange={(e) => {
                                        this.setState({ [e.target.name]: e.target.value })
                                    }} />
                                    {<div style={this.state.suburb ? { display: 'none' } : { color: 'red' }}>Please enter a valid suburb</div>}
                                    {/* <div className="suggestions">
                                        {suggestions.map((items, index) =>
                                            <div key={index} onClick={() => {
                                                this.setState({ suburb: items.suburb + "," + items.state })
                                                onClear();
                                            }}>{items.suburb + "," + items.state}</div>
                                        )}
                                    </div> */}
                                </div>
                                <button className="submit-btn" onClick={this.handleClick}>Continue</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}