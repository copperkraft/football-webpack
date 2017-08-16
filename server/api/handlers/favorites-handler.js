const favorites = require('../../services/favorite-service');

module.exports = (app, url) => {
    app.get(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        favorites.getFavorites(request.session.userId)
            .then(favorites => response.send(favorites))
            .catch(error => {
                console.error('an error occur in favorite handler. ' + error);
                response.sendStatus(500);
            });
    });
    app.post(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        if (request.body.isFavorite) {
            favorites.addFavorite(request.session.userId, {
                teamName: request.body.name,
                teamId: request.body.id
            })
                .then(favorites => response.send(favorites))
                .catch(() => response.sendStatus(500));
        } else {
            favorites.removeFavorite(request.session.userId, {
                teamName: request.body.name,
                teamId: request.body.id
            })
                .then(favorites => response.send(favorites))
                .catch(() => response.sendStatus(500));
        }
    });
};