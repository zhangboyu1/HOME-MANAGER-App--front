import { data } from './localStorage';
import axios from 'axios';
const url = 'http://localhost:8080/api/user/profile';

const addSuccess = (userId, content) => {
    return {
        type: 'ADD_SUCCESS',
        userId: userId,
        content: content
    };
};

const addFail = (error) => {
    return {
        type: 'ADD_FAIL',
        error: error,
    };
};


export const addUser = (_profileContent) => {

    const addData = new Object();
    addData.firstName = _profileContent.firstName;
    addData.lastName = _profileContent.lastName;
    addData.title = _profileContent.title;
    addData.userName = _profileContent.userName;
    addData.password = _profileContent.userName;

    return axios.post(url, JSON.stringify(addData)).then(response => {
        if (response.data.errno === 1) {
            return addSuccess('xxx', response.data.message)
        }
        return addFail(response.data.message)
    }).catch(err => {
        addFail(err)
    });

}
