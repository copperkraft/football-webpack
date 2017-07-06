const database = require('../database/index');
const encryptor = require('../utils/passwordEncryptor');

module.exports = class User {
    constructor(databaseEntity) {
        this.data = databaseEntity;
    }
    static get(session) {
        return new Promise((resolve, reject) => {
            database.user.findById(session.userId)
                .then(user => {
                    if (user) {
                        resolve(user); //todo: insert mapper somewhere to return valuable data
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        });
    }
    static authorise(session, loginData) {
        return new Promise((resolve, reject) => {
            database.user.findOne({where: {email: loginData.email}})
                .then(user => {
                    if (user) {
                        if (encryptor.check(loginData.password, user.salt, user.password)) {
                            session.userId = user.id;
                            resolve(user); //todo: insert mapper somewhere to return valuable data
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
                salt: salt,
                password: encryptor.encrypt(userData.password, salt)
            })
                .then(user => {
                    if (user) {
                        session.userId = user.id;
                        resolve(user); //todo: insert mapper somewhere to return valuable data
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