import { data } from './localStorage';

const authSuccess = (userId) => {
    return {
        type: 'AUTH_SUCCESS',
        userId: userId,
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
    authData.user = user;
    authData.password = password;
    authData.existUser = false;
    authData.id = ''
    // -------------------------------------------------Only front - end -----------------------------------------------------------------------
    let loclOb = localStorage;
    //clear local storage// 
    for (var key in loclOb) {
        if (key != 'length') {
            if (JSON.parse(loclOb[key]).user === user) {
                authData.existUser = true
                authData.id = key
                break
            }
        } if (key === 'length') {
            break
        }
    }

    console.log("whether this user has already existed:", authData.existUser)
    if (isSignup) {  //没有SignUp...或者已经signUp、但是
        if (authData.existUser) {
            return authFail()
        }
        // Then only singup intention could getinto this function....:
        const date = new Date();
        let userId_FAKE = date.getTime()
        var userid = userId_FAKE
        data.set(userid, authData)
        data.set('currentUser', userid)
        return authSuccess(userId_FAKE)
    }
    else {
        console.log('current password is:', authData.password)
        if (authData.password === '') {
            return authFail('The password is required')
        }
        console.log('This is the log-in process')
        if (authData.existUser) {
            data.set('currentUser', authData.id) //现在user是对的。。。再来看看password是不是对的。
            if (data.get(authData.id).password.match(authData.password)) {
                return authSuccess(data.get(userid || authData.id))
            } else {
                return authFail('The password is not correct!')
            }
        } else {
            return authFail('The user not existed, please check or sign or a new user!')
        }
    }
}


        // ----------------------------------------------------------If have back-end server--------------------------------------------------------------------------------

        //     let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCA09BIX4hedS0NTjmoC2oaQ_CmD8KWIA4';
        //     if (!isSignup) {
        //         // url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCA09BIX4hedS0NTjmoC2oaQ_CmD8KWIA4';
        //         url = configuration.api.backend_api + "/api/v1/users/signIn";
        //     }
        //     axios.post(url, authData).then(response => {
        //         const { exp } = decode(response.data.token);
        //         var expirationDate = new Date();
        //         var t_s = new Date().getTime();
        //         expirationDate.setTime(t_s + exp / 10);
        //         localStorage.setItem('token', response.data.token);
        //         localStorage.setItem('expirationDate', expirationDate);
        //         localStorage.setItem('userId', response.data.user._id);
        //         localStorage.setItem("userName", response.data.user.name.firstName + " " + response.data.user.name.lastName);
        //         localStorage.setItem("userImage", response.data.user.images);
        //         dispatch(authSuccess(response.data.token, response.data.user._id,
        //             response.data.user.name.firstName + " " + response.data.user.name.lastName));
        //         //dispatch(checkAuthTimeout(response.data.expiresIn));
        //     }).catch(err => {
        //         dispatch(authFail(err));
        //     });

