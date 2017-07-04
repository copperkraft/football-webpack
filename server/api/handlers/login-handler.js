const user = require('../../models/user');

module.exports.post = (request, response) => {
    user.authorise(request.session, {
        eMail: request.body.email,
        password:  request.body.password
    })
        .then(user => response.send(user))
        .catch(() => response.sendStatus(401));
};
