const userRepository = require('../data/repositories/user-repository');
const favoriteRepository = require('../data/repositories/favorite-repository');

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
    },
    getFavorites(id) {
        return favoriteRepository.get(id);
    },
    addFavorite(id, team) {
        return favoriteRepository.add(id, team);
    },
    removeFavorite(id, team) {
        return favoriteRepository.remove(id, team);
    }
};