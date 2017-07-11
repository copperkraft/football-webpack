const userRepository = require('../repositories/user-repository');
const favoriteRepository = require('../repositories/favorite-repository');

module.exports = {
    get(id) {
        return userRepository.get(id);
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