const user = require('../../models/user');

module.exports.post = (request, response) => {
    user.authorise(request.session, {
        email: request.body.email,
        password:  request.body.password
    })
        .then(user => response.send(user))
        .catch(err => response.sendStatus(403));
};
