const database = require('../database/index');

module.exports = class User {
    constructor(databaseEntity) {

    }
    static get(session) {
        return new Promise((resolve, reject) => {
            database.findById(session.userId)
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
                    if (user) { //todo: password logic
                        session.userId = user.id;
                        resolve(user); //todo: insert mapper somewhere to return valuable data
                    } else {
                        reject('wrong e-male: ', loginData);
                    }
                })
                .catch(err => reject(err));
        });
    }
    static register(session, user) {
        return new Promise((resolve, reject) => {
            //todo existence check
            database.user.create({
                email: user.email,
                name: user.name,
                password: user.pass, //todo: crypto logic
                salt: Math.random()  //todo: crypto logic
            })
                .then(user => {
                    if (user) { //todo: password logic
                        session.userId = user.id;
                        resolve(user); //todo: insert mapper somewhere to return valuable data
                    } else {
                        reject('wrong e-male');
                    }
                })
                .catch(err => reject(err));
        });
    }
    static logOff(session) {
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