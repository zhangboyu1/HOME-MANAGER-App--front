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
    // -------------------------------------------------Only front - end -----------------------------------------------------------------------
    // let userId = localStorage.getItem('userId'); // need to check if the local has this 'userId" 
    //Now we don't have back-end////so for the userId, need to be mannually added....
    //If use Express, the UserId will be automaticlly generated for each domain......
    if (isSignup) {
        // Then only singup intention could getinto this function....:
        console.log('this user need to sign up')
        const date = new Date();
        let userId_FAKE = date.getTime()
        var userid = userId_FAKE
        data.set(userid, authData)
        console.log(localStorage)
        return authSuccess(userId_FAKE)
    } if (data.get(userid) != null) {
        if (localStorage.hasOwnProprety(userid)) {
            console.log('auth OK!!... This user has already signed up')
            return authSuccess(data.get(userid))
        } else {
            console.log('auth fail... System doesnt have this user!')
            return authFail()
        }
    } else {
        console.log('auth fail... havent done the signUp ')
        return authFail()
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
};
