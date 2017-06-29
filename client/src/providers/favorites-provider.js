import {favoriteData} from 'data/favorite-repository';
import favoriteMapper from 'models/favorite/favorite-mapper';

export const favorites = {
    add(team) {
        return favoriteData.add(favoriteMapper(team));
    },
    remove(team) {
        return favoriteData.remove(favoriteMapper(team));
    },
    get() {
        return favoriteData.get().then(data => data.map(favoriteMapper));
    }
};