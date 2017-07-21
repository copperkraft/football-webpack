const user = require('../../services/user');

module.exports = (app, url) => {
    app.post(url, (request, response) => {
        console.log(request.body);
        user.register({
            email: request.body.email,
            password: request.body.password,
            name: request.body.name
        })
            .then(user => {
                request.session.userId = user.id;
                response.send(user);
            })
            .catch(error => {
                console.log('an error occur in register handler. ' + error);
                response.sendStatus(500);
            });
    });
};