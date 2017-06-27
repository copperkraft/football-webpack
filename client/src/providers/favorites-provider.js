import {favoriteData} from 'data/favorite-repository';

export const favorites = {
    add(name) {
        favoriteData.add(name);
    },
    remove(name) {
        favoriteData.remove(name);
    },
    load() {
        return favoriteData.load();
    }
};