const user = require('../../models/user');

module.exports.get = (request, response) => {
    user.get(request.session, request.body.id)
        .then(data => response.send(data))
        .catch(() => response.sendStatus(403));
};
module.exports.post = (request, response) => {

};

