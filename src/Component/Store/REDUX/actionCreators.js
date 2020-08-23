// Here we are going to define a method that can manage all the action and dispatch them to the store

import { CHANGE_USERPROFILE_VALUE, INITIATE_USERPROFILE_VALUE } from './actionTypes'
import axios from 'axios'
const url_profile = 'http://localhost:8080/api/user/profile';

export const changeProfileAction = _values => ({
    type: CHANGE_USERPROFILE_VALUE,
    value: _values
})

// This is for Thunk......
export const getProfile = () => {
    return (dispatch) => {
        //Ascyn action to get data ....
        axios.get(url_profile).then(response => {
            if (response) {
                console.log(response)
                const { data } = response.data
                const action = {
                    type: INITIATE_USERPROFILE_VALUE,
                    value: data
                }
                dispatch(action)
            }
        })
    }
}