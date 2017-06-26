import ko from 'knockout';

import {favoriteData} from 'data/favorite-repository';

export const favorites = {
    add(name) {
        favoriteData.add(name);
        this.list.push(name);
    },
    remove(name) {
        this.list.remove(name);
        favoriteData.remove(name);
    },
    list: ko.observableArray(favoriteData.load())
};