const Sequelize = require('sequelize');
const config = require('config');

const databaseConnection = new Sequelize(config.get('databaseUrl'), { //todo: configs here!
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: config.get('usingSsl')
    },
    logging: false
});

databaseConnection
    .authenticate()
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

databaseConnection.sync();

module.exports = databaseConnection;