module.exports = (app, url) => {
    app.get(url, (request, response) => {
        if (!request.session.userId) {
            response.sendStatus(401);
            return;
        }
        request.session.destroy();
        response.sendStatus(202);
    });
};