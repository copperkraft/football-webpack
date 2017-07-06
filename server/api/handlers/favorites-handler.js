const favorite = require('../../models/favorite');

module.exports.get = (request, response) => {
    favorite.get(request.session)
        .then(favorites => response.send(favorites))
        .catch(() => response.sendStatus(403));
};
module.exports.post = (request, response) => {
    if(request.body.isFavorite) {
        console.log(request.body);
        favorite.add(request.session, {
            teamName: request.body.name,
            teamId: request.body.id
        })
            .then(() => response.sendStatus(202))
            .catch(() => response.sendStatus(403));
    } else {
        favorite.remove(request.session, {
            teamName: request.body.name,
            teamId: request.body.id
        })
            .then(() => response.sendStatus(202))
            .catch(() => response.sendStatus(403));
    }

};