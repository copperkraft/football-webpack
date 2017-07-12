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
        return database.user.findById(userId)
            .then(user => {
                if (user) {
                    return mapper(user);
                } else {
                    throw 'user is not logged';
                }
            });
    },
    set(userId, data) {
        return database.user.findById(userId)
            .then(user => {
                if (user) {
                    return user.update(data).then(user => mapper(user));
                } else {
                    throw 'user with this id does not exist';
                }
            });
    },
    authorize(loginData) {
        return database.user.findOne({
            where: {
                email: loginData.email
            }
        }).then(user => {
            if (user) {
                if (encryptor.check(loginData.password, user.salt, user.password)) {
                    return (mapper(user));
                } else {
                    throw 'wrong password';
                }
            } else {
                throw 'wrong email';
            }
        });
    },
    register(userData) {
        const salt = encryptor.generateSalt().toString();
        return database.user.create({
            email: userData.email,
            name: userData.name,
            salt,
            password: encryptor.encrypt(userData.password, salt)
        }).then(user => {
            if (user) {
                return mapper(user);
            } else {
                throw 'registration error';
            }
        });
    }
};