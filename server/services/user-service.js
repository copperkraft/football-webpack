const userRepository = require('../data/repositories/user-repository');

module.exports = {
    get(id) {
        return userRepository.get(id);
    },
    set(id, data) {
        return userRepository.set(id, data);
    },
    authorize(loginData) {
        return userRepository.authorize(loginData);
    },
    register(userData) {
        return userRepository.register(userData);
    }
};