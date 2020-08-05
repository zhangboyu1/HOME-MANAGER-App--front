export const checkInputValidity = (value, rules) => {
    let isValid = true;
    const Emailpattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
    const Numpattern = /^\d+$/;
    if (!rules) {
        return true;
    } if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    } if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    } if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    } if (rules.isEmail) {
        isValid = Emailpattern.test(value) && isValid
    } if (rules.isNumeric) {
        isValid = Numpattern.test(value) && isValid
    }
    return isValid;
}