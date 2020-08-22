import { data } from './localStorage';
import { Loginstatus } from './LoginCheck/LoginCheck';
import axios from 'axios';
const checkStorage = localStorage
const url_signup = 'http://localhost:8080/api/user/signup';
const url_login = 'http://localhost:8080/api/user/login';
const reg = /^\+?[0-9][0-9]*$/;
const userId = `${Date.now()}_${Math.random()}`

const authSuccess = (userId, content) => {
    return {
        type: 'AUTH_SUCCESS',
        userId: userId,
        content: content
    };
};

const authFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error,
    };
};



export const auth = (user, password, isSignup) => {
    const authData = new Object();
    authData.userName = user;
    authData.password = password;
    authData.existUser = false;
    authData.id = ''

    for (let key in checkStorage) {
        if (reg.test(Number(key.split('_')[0]))) {
            if (data.get(key).user === authData.userName) {
                authData.existUser = true;
                authData.id = key
            }
        }
    }
    if (isSignup) {
        return axios.post(url_signup, JSON.stringify(authData)).then(response => {
            if (response.data.errno === 1) {
                return authSuccess('xxx', response.data.message)
            }
            return authFail(response.data.message)
        }).catch(err => {
            authFail(err)
        });
    }
    else {
        if (!authData.password) {
            return authFail('The password is required')
        } if (!authData.userName) {
            return authFail('The username is required')
        }

        return axios.post(url_login, JSON.stringify(authData)).then(response => {
            const { Resdata } = response.data
            if (response.data.errno) {
                if (!authData.existUser) {
                    data.set('currentUser', userId)
                    data.set(userId, { user: authData.userName })
                    Loginstatus(authSuccess(userId, Resdata))
                    return authSuccess(userId, Resdata)
                }

                data.set('currentUser', authData.id)
                Loginstatus(authSuccess(authData.id, Resdata))
                return authSuccess(authData.id, Resdata)
            }
            return authFail(response.data.message)
        }).catch(err => {
            authFail(err)
        });
    }
}




