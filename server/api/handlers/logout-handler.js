const user = require('../../models/user');

module.exports.get = (request, response) => {
    user.logout(request.session)
        .then(() => response.sendStatus(200))
        .catch(() => response.sendStatus(403));
};

