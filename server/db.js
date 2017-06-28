const Sequelize = require('sequelize');

const sequelize = require('./database/databaseConnection');
const User = require('./database/models/user');

User.findAll().then(users => {
    console.log(users.map(user => user.dataValues));
});