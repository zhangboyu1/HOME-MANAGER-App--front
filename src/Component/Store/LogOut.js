// import { Logoutstatus } from '../Store/LoginCheck/LoginCheck';
import axios from "axios";
import { data } from './localStorage';
const userid = data.get('currentUser')

const logoutSuccess = (_message) => {
    return {
        type: 'OUT_SUCCESS',
        message: _message,
        value: 1
    };
};

const logoutFail = (error) => {
    return {
        type: 'OUT_FAIL',
        error: error,
    };
};


export const LogoutSetting = () => {
    const url_logout = 'http://localhost:8080/api/user/logout';
    return axios.post(url_logout, { userid: userid }).then(response => {
        if (response.data.errno) {
            console.log('starting to logout......')
            console.log(response.data)
            return logoutSuccess(response.data.message)
        }
        return logoutFail(response.data.message)
    })
}