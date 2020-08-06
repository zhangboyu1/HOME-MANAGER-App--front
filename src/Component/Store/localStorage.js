// This is to store and retrieve data from the localstorage...
export const data = {
    set: (key, value) => {
        if (!key || !value) { return; }
        if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },
    get: (key) => {
        var value = localStorage.getItem(key);
        if (!value) { return; }
        // assume it is an object that has been stringified
        if (value[0] === "{") {
            value = JSON.parse(value);
        }
        return value;
    }
}

const CheckSuccess = (keyMark) => {
    return {
        type: 'CHECK_SUCCESS',
        mark: keyMark,
    };
};

const CheckFail = (error) => {
    return {
        type: 'CHECK_FAIL',
        error: error,
    };
};

export const checkStore = (checkMark) => {

    if (localStorage.keyMark) {
        return CheckSuccess(localStorage.keyMark)
    } else {
        for (var prop in localStorage) { if (localStorage.hasOwnProperty(prop)) { delete localStorage[prop]; } } // 先清空这个数组。
        data.set('keyMark', checkMark)
        return CheckFail('First time, add a key-mark')
    }
}


