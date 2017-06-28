import {favoriteData} from 'data/favorite-repository';

export const favorites = {
    add(name) {
        return favoriteData.add(name);
    },
    remove(name) {
        return favoriteData.remove(name);
    },
    get() {
        return favoriteData.get();
    }
};