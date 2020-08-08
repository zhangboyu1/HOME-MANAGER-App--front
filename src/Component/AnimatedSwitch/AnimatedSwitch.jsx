import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import './AnimatedSwitch.css'

const AnimatedSwitch = props => {
    const { children } = props
    return (
        <Route
            render={({ location }) =>
                <TransitionGroup>
                    <CSSTransition
                        timeout={3000}
                        classNames={'fade'}
                        key={location.key}>
                        <Switch staticContext={props} location={location}>{children}</Switch>
                    </CSSTransition>
                </TransitionGroup>
            }
        />
    )
}

export default AnimatedSwitch

