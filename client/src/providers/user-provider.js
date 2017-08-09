import {userRepository} from 'data/user-repository';
import userMapper from 'models/user/user-mapper';

export const userProvider = {
    logIn(info) {
        return userRepository.logIn(info).then(data => userMapper(data));
    },
    register(info) {
        return userRepository.register(info).then(data => userMapper(data));
    },
    logout() {
        return userRepository.logout();
    },
    get() {
        return userRepository.get().then(data => userMapper(data));
    },
    set(info) {
        return userRepository.set(info).then(data => userMapper(data));
    }
};