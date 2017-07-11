const user = require('../../models/user');


module.exports.post = (request, response) => {
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
};
