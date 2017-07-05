const user = require('../../models/user');

module.exports.get = (request, response) => {
    user.logOff(request.session)
        .then(() => response.sendStatus(200))
        .catch(() => response.sendStatus(403));
};

