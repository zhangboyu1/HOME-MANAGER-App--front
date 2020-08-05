import React from 'react';
import '../SignUp.css'
import './SubSignUp.css'
import { addUser } from '../../Store/AddUser'

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


    async handleClick(e) {
        e.preventDefault();
        const { firstName, lastName, title } = this.state;
        console.log(firstName, lastName, title)
        const userid = this.props.location.state.userId

        console.log(userid)
        let addResult = addUser(firstName, lastName, title, userid)
        console.log(addResult)
        //Only works on the front- end....
        if (addResult.type === "ADD_SUCCESS") {
            this.props.history.push('/Login', addResult)

        }
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