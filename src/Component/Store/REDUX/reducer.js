import { CHANGE_USERPROFILE_VALUE, INITIATE_USERPROFILE_VALUE } from './actionTypes'

const defaultState = {
    // ProfileData
    userProfile: {
        users_LASTNAME: '',
        users_FIRSTNAME: '',
        users_TITLE: '',
        users_EMAIL: ''
    }
}

// Reducer has a limited scope ---- reducer can only copy and accept the state, but cannot change the state/
// make reduce a purefunction
// Cannot directly cahnge the state....
export default (state = defaultState, action) => {
    //store the data and what action need to be take....
    console.log(state, action)
    if (action.type === CHANGE_USERPROFILE_VALUE || action.type === INITIATE_USERPROFILE_VALUE) {
        // Copy the previousState to the New State/
        const newState = JSON.parse(JSON.stringify(state))
        newState.userProfile.users_LASTNAME = action.value.users_LASTNAME
        newState.userProfile.users_FIRSTNAME = action.value.users_FIRSTNAME
        newState.userProfile.users_TITLE = action.value.users_TITLE
        newState.userProfile.users_EMAIL = action.value.users_EMAIL
        return newState
    }
    return state
}