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
    // let userId = localStorage.getItem('userId'); // need to check if the local has this 'userId" 
    //Now we don't have back-end////so for the userId, need to be mannually added....
    //If use Express, the UserId will be automaticlly generated for each domain......

    // ----===----

    //首先还要遍历这个对象的每一项 Key-pair value
    let loclOb = localStorage;

    console.log(loclOb)

    //clear local storage// 

    for (var key in loclOb) {
        // console.log(loclOb[key])
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
        // Then only singup intention could getinto this function....:
        console.log('This is the signUp-process')
        const date = new Date();
        let userId_FAKE = date.getTime()
        var userid = userId_FAKE
        data.set(userid, authData)
        data.set('currentUser', userid)
        console.log(localStorage)
        return authSuccess(userId_FAKE)
    }
    else {
        console.log('This is the log-in process')
        if (authData.existUser) {
            console.log('auth OK!!... This user has already signed up')
            data.set('currentUser', authData.id)
            return authSuccess(data.get(userid || authData.id))
        } else {
            console.log('auth fail... System doesnt have this user!')
            return authFail()
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

