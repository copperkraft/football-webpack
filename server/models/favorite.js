const database = require('../database/index');
const user = require('./user');

module.exports = class Favorite {
    constructor() {}
    static get(session) {
        return user.get(session).then(user => {
            console.log('getting...');
            return user.getFavorites();

        });
    }
    static add(session, teamData) {
        return user.get(session).then(user => {
            return database.favorite
                .findOrCreate({
                    where: {
                        teamId: teamData.teamId,
                        teamName: teamData.teamName
                    },
                    include: database.user
                })
                .then(team => {
                    user.addFavorite(team[0]);
                });
        });
    }
    static remove(session, teamData) {
        return user.get(session).then(user => {
            return database.favorite
                .findOrCreate({
                    where: {
                        teamId: teamData.teamId,
                        teamName: teamData.teamName
                    },
                    include: database.user
                })
                .then(team => {
                    user.removeFavorite(team[0]);
                });
        });
    }
};