import {favoriteData} from 'data/favorite-repository';
import favoriteMapper from 'models/favorite/favorite-mapper';

export const favorites = {
    add(team) {
        return favoriteData.add(team);
    },
    remove(team) {
        return favoriteData.remove(team);
    },
    get() {
        return favoriteData.get().then(data => {
            return data ? data.map(favoriteMapper) : [];
        });
    }
};