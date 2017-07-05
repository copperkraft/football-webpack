import request from 'utils/request';

export const userRepository = {
    logIn(info) {
        return request('api/user/login', 'POST', info);
    },
    register(info) {
        return request('api/user/register', 'POST', info);
    },
    /*logOff() {
        return request('user/login');
    },*/
    get() {
        return request('api/user');
    },
    isExist() {
        return request('api/user/exist');
    }
};