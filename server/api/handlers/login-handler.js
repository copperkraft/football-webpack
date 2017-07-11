const user = require('../../models/user');

module.exports = (app, url) => {
    app.post(url, (request, response) => {
        user.authorize({
            email: request.body.email,
            password:  request.body.password
        })
            .then(user => {
                request.session.userId = user.id;
                response.send(user);
            })
            .catch(error => {
                console.log('an error occur in login handler. ' + error);
                response.sendStatus(403);
            });
    });
};