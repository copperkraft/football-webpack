import ko from 'knockout';

import {userRepository} from 'data/user-repository';
import userMapper from 'models/user/user-mapper';

export const userProvider = {
    logIn(info) {
        return userRepository.logIn(info)
            .then(data => userMapper(data))
            .then(data => {
                this.currentUser(data);
                return data;
            });
    },
    register(info) {
        return userRepository.register(info)
            .then(data => userMapper(data))
            .then(data => {
                this.currentUser(data);
                return data;
            });
    },
    logout() {
        return userRepository.logout().then(() => {
            this.currentUser(null);
        });
    },
    get() {
        return userRepository.get()
            .then(data => userMapper(data))
            .then(data => {
                this.currentUser(data);
            });
    },
    set(info) {
        return userRepository.set(info)
            .then(data => userMapper(data))
            .then(data => {
                this.currentUser(data);
            });
    },
    currentUser: ko.observable()
};