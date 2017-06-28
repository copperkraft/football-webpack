const Sequelize = require('sequelize');

const sequelize = require('../databaseConnection');

const UserFavoriteTeam = sequelize.define('user', {
    teamId: {
        type: Sequelize.INTEGER
    }
});

module.exports = UserFavoriteTeam;