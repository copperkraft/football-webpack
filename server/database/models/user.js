const Sequelize = require('sequelize');

const database = require('../databaseConnection');

const UserFavoriteTeam = require('./user-favorite-team');

const User = database.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    birthDate: {
        type: Sequelize.DATEONLY
    }
});

User.hasMany(UserFavoriteTeam, {as: 'Favorites'});

module.exports = User;