const user = require('../../models/user');

module.exports.post = (request, response) => {
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
            response.sendStatus(403);
        });
};