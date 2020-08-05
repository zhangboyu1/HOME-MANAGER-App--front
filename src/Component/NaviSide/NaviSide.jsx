import React from 'react';
import './NaviSide.css';
import { myContext } from '../../App'

export default function NaviSide() {
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
                            <myContext.Consumer>
                                {(value) => {
                                    return (
                                        <>
                                            <p class="name__text">{value.LastName}</p>
                                            <p class="name__text">{value.title}</p>
                                            <p class="email__text">{value.user}</p>
                                        </>);
                                }}
                            </myContext.Consumer>
                        </div>
                    </section>
                </div>
            </div>
            <div className="NavBackground" ></div>
        </div>
    );
}
