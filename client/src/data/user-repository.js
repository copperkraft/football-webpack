import request from 'utils/request';

export const userRepository = {
    logIn(info) {
        return request.post('api/user/login', info);
    },
    register(info) {
        return request.post('api/user/register', info);
    },
    logout() {
        return request.get('api/user/logout');
    },
    get() {
        return request.get('api/user');
    },
    isExist() {
        return request.get('api/user/exist');
    }
};