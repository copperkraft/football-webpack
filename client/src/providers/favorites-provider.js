import {favoriteData} from 'data/favorite-repository';

export const favorites = {
    add(team) {
        return favoriteData.add(team);
    },
    remove(team) {
        return favoriteData.remove(team);
    },
    get() {
        return favoriteData.get();
    }
};