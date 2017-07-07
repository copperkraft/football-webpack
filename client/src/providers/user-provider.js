import ko from 'knockout';

import {userRepository} from 'data/user-repository';

export const user = {
    logIn(info) {
        return userRepository.logIn(info).then(data => {
            this.currentUser(data);
            return data;
        });
    },
    register(info) {
        return userRepository.register(info).then(data => {
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
        return userRepository.get().then(data => {
            this.currentUser(data);
        });
    },
    currentUser: ko.observable()
};