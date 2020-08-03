import React from 'react';
import './NaviSide.css';

export default class NaviSide extends React.Component {
    constructor(props) {
        super(props)

    }

    //needs to be modified with hover effect in CSS.....




    render() {
        console.log(this.props)
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
                                <p class="name__text">Boyu zhang</p>
                                <p class="name__text">Web Designer | Smart Product Developer</p>
                                <p class="email__text">zhangboyu@yahoo.com</p>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="NavBackground" ></div>
            </div>
        )
    }
}