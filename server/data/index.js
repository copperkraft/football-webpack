const Sequelize = require('sequelize');
const databaseConnection = require('./databaseConnection');

const favorite = require('./models/favorite-model')(databaseConnection, Sequelize.DataTypes);
const user = require('./models/user-model')(databaseConnection, Sequelize.DataTypes);

favorite.associate(user);
user.associate(favorite);

module.exports.favorite = favorite;
module.exports.user = user;