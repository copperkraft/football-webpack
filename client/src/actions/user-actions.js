import {userProvider} from 'providers/user-provider';

export const USER_LOGOUT = 'USER_LOGOUT';
function userLogout() {
    return {
        type: USER_LOGOUT
    };
}

export const REQUEST_USER = 'REQUEST_USER';
function requestUser() {
    return {
        type: REQUEST_USER
    };
}

export const RECEIVE_USER = 'RECEIVE_USER';
function receiveUser(user) {
    return {
        type: RECEIVE_USER,
        payload: user
    };
}

export function fetchUser() {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.get().then(user => {
            dispatch(receiveUser(user));
        });
    };
}

export function registerUser(info) {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.register(info).then(user => {
            dispatch(receiveUser(user));
        });
    };
}

export function logInUser(info) {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.register(info).then(user => {
            dispatch(receiveUser(user));
        });
    };
}

export function logOutUser() {
    return function(dispatch) {
        dispatch(userLogout());
        return userProvider.register(info).then(user => {
            dispatch(receiveUser(user));
        });
    };
}

export function setUserInfo(info) {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.set(info).then(user => {
            dispatch(receiveUser(user));
        });
    };
}
