const Sequelize = require('sequelize');

const databaseConnection = new Sequelize(process.env.DATABASE_URL, { //todo: configs here!
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: process.env.DB_SSL !== 'false'
    }
});

databaseConnection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

databaseConnection.sync();

module.exports = databaseConnection;