import { data } from '../localStorage'


const LogInStatus_In = () => {
    return {
        type: 'LOGIN_SUCCESS',
        value: 1
    };
};

const LogInStatus_Out = (error) => {
    return {
        type: 'LOGIN_FAIL',
        error: error,
        value: 0
    };
};


export const Loginstatus = (AuthState) => {
    //每一次成功登陆时需要做的事情。。。。
    if (AuthState.type === 'AUTH_SUCCESS') {
        //在local里添加一个loginstatus：
        data.set('log_status', 1)

        console.log(AuthState.type)
        console.log(localStorage)
        return LogInStatus_In
        //Log-out还要继续写。。。。。。
    }
}

export const LoginCheck = () => {
    if (Number(data.get('log_status'))) {
        return LogInStatus_In()
    } else {
        return LogInStatus_Out('User has already logout....')
    }
}




