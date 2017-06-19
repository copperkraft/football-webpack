import ko from 'knockout';

import {favoriteData} from 'data/favorite-repository';

export const favorites = {
    add: function(name) {
        favoriteData.add(name);
        this.list.push(name);
    },
    remove: function(name) {
        this.list.remove(name);
        favoriteData.remove(name);
    },
    list: ko.observableArray(favoriteData.load())
};