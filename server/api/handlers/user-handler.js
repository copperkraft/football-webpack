const user = require('../../models/user');

module.exports.get = (request, response) => {
    user.get(request.session)
        .then(data => {
            response.send(data);
        })
        .catch(() => response.sendStatus(403));
};
