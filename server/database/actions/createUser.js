const db = require('../index');

module.exports = (name, email, birthDate, password) => {
    db.user.create({
        name,
        email,
        birthDate,
        password,
        salt: 'HDSS'
    });
};
