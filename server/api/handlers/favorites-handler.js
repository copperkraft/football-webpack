const user = require('../../models/user');

module.exports.get = (request, response) => {
    user.getFavorites(request.session)
        .then(user => response.send(user))
        .catch(() => response.sendStatus(403));
};
module.exports.post = (request, response) => {
    user.setFavorite(request.session, {
        name: request.body.name,
        id: request.body.id,
        status: request.body.status
    })
        .then(() => response.sendStatus(200))
        .catch(() => response.sendStatus(403));
};