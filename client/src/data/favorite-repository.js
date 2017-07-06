import request from 'utils/request';

export const favoriteData = {
    add(team) {
        return request('api/favorites', 'POST', {
            name: team.name,
            id: team.id,
            isFavorite: true
        });
    },
    remove(team) {
        return request('api/favorites', 'POST', {
            name: team.name,
            id: team.id,
            isFavorite: false
        });
    },
    get() {
        return request('api/favorites');
    }
};