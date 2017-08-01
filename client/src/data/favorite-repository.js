import request from 'utils/request';

export const favoriteData = {
    add(team) {
        return request.post('api/favorites', {
            name: team.name,
            id: team.id,
            isFavorite: true
        });
    },
    remove(team) {
        return request.post('api/favorites', {
            name: team.name,
            id: team.id,
            isFavorite: false
        });
    },
    get() {
        return request.get('api/favorites');
    }
};