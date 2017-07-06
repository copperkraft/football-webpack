const crypto = require('crypto');

module.exports = {
    encrypt(password, salt) {
        return crypto.createHmac('sha1', salt).
        update(password).
        digest('hex');
    },
    check(password, salt, hash) {
        return this.encrypt(password, salt) === hash;
    },
    generateSalt() {
        return Math.floor(1000 + Math.random() * 9000);
    }
};