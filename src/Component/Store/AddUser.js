import { data } from './localStorage';



const addSuccess = (userId) => {
    return {
        type: 'ADD_SUCCESS',
        userId: userId,
    };
};

const addFail = (error) => {
    return {
        type: 'ADD_FAIL',
        error: error,
    };
};

export const addUser = (firstName, LastName, title, userid) => {
    const addData = new Object();
    addData.firstName = firstName;
    addData.LastName = LastName;
    addData.title = title;

    if (localStorage.hasOwnProperty(userid)) {
        console.log("start to add profile to the storage....")
        let login_Value = data.get(userid)
        let newValue = {
            ...login_Value,
            ...addData
        };
        data.set(userid, newValue)
        return addSuccess(userid)
    } else {
        return addFail('error')
    }
}