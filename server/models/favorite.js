const database = require('../database/index');
const user = require('./user');

module.exports = class Favorite {
    constructor(params = {}) {
        this.id = params.id;
        this.name = params.name;
    }
    static mapper (databaseEntity) {
        return {
            id: databaseEntity.dataValues.teamId,
            name: databaseEntity.dataValues.teamName,
        };
    }
    static get(session) {
        return user.get(session).then(user => {
            return user.getFavorites().then(values => values.map(Favorite.mapper));
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
                    console.log(Favorite.mapper(team[0]));
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