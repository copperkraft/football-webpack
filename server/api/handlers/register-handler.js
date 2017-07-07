const user = require('../../models/user');

module.exports.post = (request, response) => {
    console.log(request.body);
    user.register(request.session, {
        email: request.body.email,
        password: request.body.password,
        name: request.body.name
    })
        .then(user => response.send(user))
        .catch(() => response.sendStatus(403));
};