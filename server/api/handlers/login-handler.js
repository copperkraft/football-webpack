const User = require('../../models/user');


module.exports.post = (request, response) => {
    User.authorize(request.session, {
        email: request.body.email,
        password:  request.body.password
    })
        .then(user => response.send(user))
        .catch(() => response.sendStatus(403));
};
