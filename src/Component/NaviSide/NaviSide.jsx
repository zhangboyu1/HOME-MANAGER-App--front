import React from 'react';
import './NaviSide.css';
import { myContext } from '../../App'
import { Logoutstatus } from '../Store/LoginCheck/LoginCheck'
import { LogoutSetting } from '../Store/LogOut'
import { NavLink } from "react-router-dom";

export default function NaviSide(props) {

    async function Logout() {
        const isLogout = await LogoutSetting()
        if (isLogout.value) {
            return Logoutstatus().value
        } else {
            alert('')
        }
    }


    const handleLogout = () => {
        Logout()
    }


    return (
        <div className="NaviSide">
            <div className='navExposed-outer'>
                <div className='navExposed-inner'></div>
                <div className="NavBarContainer">
                    <div className="SlideBar" >
                        <section class="NavHeader">
                            <h2 class="greetingText">Welcome Back</h2>
                            <h5>Weather App</h5>
                            <div class="ProfileImage">
                                <img src="#" alt="Jerry's profile" />
                            </div>

                            <div class="account-details">
                                <myContext.Consumer>
                                    {(value) => value &&
                                        <>
                                            <p class="name__text">{value.users_LASTNAME}</p>
                                            <p class="name__text">{value.users_TITLE}</p>
                                            <p class="email__text">{value.users_EMAIL}</p>
                                        </>
                                    }
                                </myContext.Consumer>
                            </div>
                            <NavLink exact to={'/login'} activeClassName='active'>
                                <button className="logout-btn" onClick={() => { handleLogout() }}> Log-out</button>
                            </NavLink>
                        </section>
                    </div>
                </div>
            </div>
            <div className="NavBackground" ></div>
        </div>
    );
}
