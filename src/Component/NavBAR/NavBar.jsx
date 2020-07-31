import React from 'react';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "block"
        }
    }


    //needs to be modified with hover effect in CSS.....

    slideBarOver = () => {
        this.setState({
            display: "block"
        })
    }

    slideBarOut = () => {
        this.setState({ display: "none" });
    }

    render() {
        const { display } = this.state
        console.log(display)
        return (
            <>
                <button class="SlideIcon" onMouseOver={this.slideBarOver} > >
                    <i class="fa fa-caret-down"></i>
                </button>
                <div className="NavBarContainer" style={{ display: display }}>
                    <div className="SlideBar" onMouseLeave={this.slideBarOut} style={{ display: display }}>
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
                    <div className="NavBackground" style={{ display: display }}></div>
                </div>

            </>
        )
    }
}