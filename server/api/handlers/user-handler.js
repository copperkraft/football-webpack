const user = require('../../services/user-service');

module.exports = (app, url) => {
    app.get(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        user.get(request.session.userId)
            .then(data => {
                response.send(data);
            })
            .catch(() => response.sendStatus(500));
    });
    app.post(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        user.set(request.session.userId, {
            birthDate: request.body.birthDate,
            name: request.body.name
        })
            .then(data => {
                response.send(data);
            })
            .catch(() => response.sendStatus(500));
    });
};

