const user = require('../../models/user');

module.exports.post = (request, response) => {
    user.register({
        eMail: request.body.email,
        password: request.body.password,
        name: request.body.name
    })
        .then(user => response.send(user))
        .catch(() => response.sendStatus(401));
};
