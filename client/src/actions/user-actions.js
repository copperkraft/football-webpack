import {userProvider} from 'providers/user-provider';
import {showErrorAlert} from 'utils/notifications';

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

export const FAILED_RECEIVE_USER = 'FAILED_RECEIVE_USER';
function failedReceiveUser() {
    return {
        type: FAILED_RECEIVE_USER
    };
}

export function fetchUser() {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.get()
            .then(user => {
                dispatch(receiveUser(user));
            })
            .catch(() => {
                dispatch(failedReceiveUser());
            });
    };
}

export function registerUser(info) {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.register(info)
            .then(user => {
                dispatch(receiveUser(user));
            })
            .catch(() => {
                showErrorAlert('Unable to register new user');
                dispatch(failedReceiveUser());
            });
    };
}

export function logInUser(info) {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.logIn(info)
            .then(user => {
                dispatch(receiveUser(user));
            })
            .catch(() => {
                showErrorAlert('Unable to authenticate');
                dispatch(failedReceiveUser());
            });
    };
}

export function logOutUser() {
    return function(dispatch) {
        dispatch(userLogout());
        userProvider.logout();
    };
}

export function setUserInfo(info) {
    return function(dispatch) {
        dispatch(requestUser());
        return userProvider.set(info)
            .then(user => {
                dispatch(receiveUser(user));
            })
            .catch(error => {
                console.error(error);
                dispatch(failedReceiveUser());
            });
    };
}
