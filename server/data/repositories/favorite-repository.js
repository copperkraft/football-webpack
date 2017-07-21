const database = require('../index');

const mapper = databaseEntity => ({
    id: databaseEntity.dataValues.teamId,
    name: databaseEntity.dataValues.teamName
});

module.exports = {
    get(id) {
        return database.favorite.findAll({
            include: [{
                model: database.user,
                where: {id: +id}
            }]
        }).then(values => values.map(mapper));
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
            .findOne({
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
    }
};