import React from 'react';
import Card from './Component/Card/Card'
import 
import Calender from './Component/CalenderComponent/Calender';


class App extends React.Component {


    //React:https://reactjs.org/docs/fragments.html
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Navigation />
                    <Switch>
                        <Route path="/" exact component={Card} />
                        <Route path="/Card" exact component={Card} />
                        <Route path="/Card/WeatherCard" exact component={WeatherCard} />
                        <Route path="/Card/calender" exact component={Calender} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}