const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://postgres:123456@localhost/my_db', {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: !!process.env.DATABASE_URL
    }
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync();
module.exports = sequelize;