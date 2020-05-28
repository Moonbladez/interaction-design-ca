export const isValidEmail = (value) => {
    const regex = RegExp(/^\w@\w+\.\w$/);
    return regex.test(value);
};

export const isValidPassword = (value) => {
    return value.length >= 8;
};

export const isNotEmpty = (value) => {
    return value !== 0;
};