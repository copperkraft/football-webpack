import {favoriteData} from 'data/favorite-repository';
import favoriteMapper from 'models/favorite/favorite-mapper';

export const favorites = {
    add(team) {
        return favoriteData.add(team).then(data => {
            return data ? data.map(favoriteMapper) : [];
        });
    },
    remove(team) {
        return favoriteData.remove(team).then(data => {
            return data ? data.map(favoriteMapper) : [];
        });
    },
    get() {
        return favoriteData.get().then(data => {
            return data ? data.map(favoriteMapper) : [];
        });
    }
};