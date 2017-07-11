const user = require('../../models/user');

module.exports = (app, url) => {
    app.get(url, (request, response) => {
        user.get(request.session.userId)
            .then(data => {
                response.send(data);
            })
            .catch(() => response.sendStatus(403));
    });
};

