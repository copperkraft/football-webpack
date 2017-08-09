const user = require('../../services/user-service');

module.exports = (app, url) => {
    app.post(url, (request, response) => {
        user.authorize({
            email: request.body.email,
            password: request.body.password
        })
            .then(user => {
                request.session.userId = user.id;
                response.send(user);
            })
            .catch(error => {
                if (error.message === 'wrong email' || error.message === 'wrong password') {
                    response.sendStatus(406);
                } else {
                    response.sendStatus(500);
                }
                console.error('an error occur in login handler. ' + error);
            });
    });
};