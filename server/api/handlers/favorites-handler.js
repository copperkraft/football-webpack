const user = require('../../services/user');

module.exports = (app, url) => {
    app.get(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        user.getFavorites(request.session.userId)
            .then(favorites => response.send(favorites))
            .catch(error => {
                console.log('an error occur in favorite handler. ' + error);
                response.sendStatus(500);
            });
    });
    app.post(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        if (request.body.isFavorite) {
            user.addFavorite(request.session.userId, {
                teamName: request.body.name,
                teamId: request.body.id
            })
                .then(() => response.sendStatus(202))
                .catch(() => response.sendStatus(500));
        } else {
            user.removeFavorite(request.session.userId, {
                teamName: request.body.name,
                teamId: request.body.id
            })
                .then(() => response.sendStatus(202))
                .catch(() => response.sendStatus(500));
        }
    });
};