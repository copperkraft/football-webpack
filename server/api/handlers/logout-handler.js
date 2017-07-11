module.exports.get = (request, response) => {
    request.session.destroy();
    response.sendStatus(202);
};

