const Sequelize = require('sequelize');
const sequelize = require('./databaseConnection');

const db = {};

const models = [
    'favorite', 'user'
];

models.forEach((name) => {
    const model = sequelize.import('./models/' + name);
    db[model.name] = model;
});


Object.keys(db).forEach(function(modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

