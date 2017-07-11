const database = require('../data');

const mapper = databaseEntity => ({
    id: databaseEntity.dataValues.teamId,
    name: databaseEntity.dataValues.teamName,
});

module.exports = {
    get(id) {
        return new Promise((resolve, reject) => {
            database.user.findById(id)
                .then(user => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        }).then(user => {
            console.log(user); //todo: maybe there is a way to do this better
            return user.getFavorites()
                .then(values => values.map(mapper));
        });
    },
    add(id, teamData) {
        return new Promise((resolve, reject) => {
            database.user.findById(id)
                .then(user => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        }).then(user => {
            return database.favorite
            .findOrCreate({
                where: {
                    teamId: teamData.teamId,
                    teamName: teamData.teamName
                },
                include: database.user
            })
            .then(teams => {
                user.addFavorite(teams[0]);
            });
        });
    },
    remove(id, teamData) {
        return new Promise((resolve, reject) => {
            database.user.findById(id)
                .then(user => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        }).then(user => {
            return database.favorite
            .findOne({ //todo: check this first if error occurs
                where: {
                    teamId: teamData.teamId,
                    teamName: teamData.teamName
                },
                include: database.user
            })
            .then(team => {
                user.removeFavorite(team);
            });
        });
    },
};