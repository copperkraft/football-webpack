const favoriteRepository = require('../data/repositories/favorite-repository');

module.exports = {
    getFavorites(userId) {
        return favoriteRepository.get(userId);
    },
    addFavorite(userId, team) {
        return favoriteRepository.add(userId, team);
    },
    removeFavorite(userId, team) {
        return favoriteRepository.remove(userId, team);
    }
};