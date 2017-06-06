/**
 * Created by uladzimir.yakushkin on 06-Jun-17.
 */
const ko = require('knockout');

const favoriteData = require('data/favorite-data');

module.exports = {
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