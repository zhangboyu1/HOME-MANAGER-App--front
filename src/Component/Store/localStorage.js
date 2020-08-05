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