const database = require('../database/index');
const encryptor = require('../utils/passwordEncryptor');

module.exports = class User {
    constructor(params = {}) {
        this.email = params.email;
        this.birthDate = params.birthDate;
        this.name = params.name;
    }
    static mapper (databaseEntity) {
        return {
            email: databaseEntity.dataValues.email,
            birthDate: databaseEntity.dataValues.birthDate,
            name: databaseEntity.dataValues.name,
        };
    }
    static get(session) {
        return new Promise((resolve, reject) => {
            database.user.findById(session.userId)
                .then(user => {
                    if (user) {
                        resolve(User.mapper(user));
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        });
    }
    static authorize(session, loginData) {
        return new Promise((resolve, reject) => {
            database.user.findOne({where: {email: loginData.email}})
                .then(user => {
                    if (user) {
                        if (encryptor.check(loginData.password, user.salt, user.password)) {
                            session.userId = user.id;
                            resolve(User.mapper(user));
                        } else {
                            reject('wrong password: ', loginData);
                        }
                    } else {
                        reject('wrong e-male: ', loginData);
                    }
                })
                .catch(err => reject(err));
        });
    }
    static register(session, userData) {
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
                        session.userId = user.id;
                        resolve(User.mapper(user));
                    } else {
                        reject('wrong e-male');
                    }
                })
                .catch(err => reject(err));
        });
    }
    static logout(session) {
        return new Promise((resolve) => {
            session.destroy();
            resolve();
        });
    }
    static isExist(email) {
        return new Promise((resolve, reject) => {
            database.user.findOne({where: {email}})
                .then(user => {
                    if (user) {
                        resolve(true);
                    } else {
                        reject('wrong e-male');
                    }
                })
                .catch(err => reject(err));
        });
    }
};