const user = require('../../services/user');

module.exports = (app, url) => {
    app.get(url, (request, response) => {
        user.get(request.session.userId)
            .then(data => {
                response.send(data);
            })
            .catch(() => response.sendStatus(403));
    });
    app.post(url, (request, response) => {
        user.set(request.session.userId, {
            birthDate: request.body.birthDate,
            name: request.body.name
        })
            .then(data => {
                response.send(data);
            })
            .catch(() => response.sendStatus(403));
    });
};

