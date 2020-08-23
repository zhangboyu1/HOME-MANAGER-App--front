import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './Component/Store/REDUX/index'
import App from './App'

const HomeManager = (
    // Provider is the core API in the react-redux....
    // Now All components contained in the <App /> can access the store in the provider...
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(HomeManager, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

