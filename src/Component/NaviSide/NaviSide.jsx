import React from 'react';
import './NaviSide.css';
import { data } from '../Store/localStorage';
export default class NaviSide extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {

        let userProfile = data.get(data.get('currentUser'))

        return (
            <div className="NaviSide">
                <div className='navExposed-outer'>
                    <div className='navExposed-inner'>
                    </div>
                </div>
                <div className="NavBarContainer">
                    <div className="SlideBar" >
                        <section class="NavHeader">
                            <h2 class="greetingText">Welcome Back</h2>
                            <h5>Weather App</h5>
                            <div class="ProfileImage">
                                <img src="#" alt="Jerry's profile" />
                            </div>
                            <div class="account-details">
                                <p class="name__text">{userProfile.LastName}</p>
                                <p class="name__text">{userProfile.title}</p>
                                <p class="email__text">{userProfile.user}</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="NavBackground" ></div>
            </div>
        )
    }
}