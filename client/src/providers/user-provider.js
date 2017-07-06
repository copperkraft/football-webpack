import {userRepository} from 'data/user-repository';

export const user = {
    logIn(info) {
        return userRepository.logIn(info).then(data => {
            return data;
        });
    },
    register(info) {
        return userRepository.register(info).then(data => {
            return data;
        });
    },
    logout() {
        return userRepository.logout();
    },
    get() {
        return userRepository.get().then(data => {
            return data;
        });
    }
};