module.exports = (app, url) => {
    app.get(url, (request, response) => {
        request.session.destroy();
        response.sendStatus(202);
    });
};