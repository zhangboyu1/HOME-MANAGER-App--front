export const data = {
    set: function (key, value) {
        if (!key || !value) { return; }
        if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    },
    get: function (key) {
        var value = localStorage.getItem(key);
        if (!value) { return; }
        // assume it is an object that has been stringified
        if (value[0] === "{") {
            value = JSON.parse(value);
        }
        return value;
    }
}