const database = require('../data');
const encryptor = require('../utils/passwordEncryptor');

const mapper = databaseEntity => ({
    id: databaseEntity.dataValues.id,
    email: databaseEntity.dataValues.email,
    birthDate: databaseEntity.dataValues.birthDate,
    name: databaseEntity.dataValues.name,
});

module.exports = {
    get(userId) {
        return new Promise((resolve, reject) => {
            database.user.findById(userId)
                .then(user => {
                    if (user) {
                        resolve(mapper(user));
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        });
    },
    authorize(loginData) {
        return new Promise((resolve, reject) => {
            database.user.findOne({where: {email: loginData.email}})
            .then(user => {
                if (user) {
                    if (encryptor.check(loginData.password, user.salt, user.password)) {
                        resolve(mapper(user));
                    } else {
                        reject('wrong password');
                    }
                } else {
                    reject('wrong e-male');
                }
            })
            .catch(err => reject(err));
        });
    },
    register(userData) {
        return new Promise((resolve, reject) => {
            const salt = encryptor.generateSalt().toString();
            database.user.create({
                email: userData.email,
                name: userData.name,
                salt,
                password: encryptor.encrypt(userData.password, salt)
            })
                .then(user => {
                    if (user) {
                        console.log('registred user:');
                        console.log(user);
                        resolve(mapper(user));
                    } else {
                        reject('wrong e-male');
                    }
                })
                .catch(err => reject(err));
        });
    }
};