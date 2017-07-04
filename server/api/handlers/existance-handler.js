const user = require('../../models/user');

module.exports.post = (request, response) => {
    user.isExist(request.body.email)
        .then(() => response.send([true]))
        .catch(() => response.send([false]));
};
