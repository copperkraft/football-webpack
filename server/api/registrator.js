const apiRetranslator = require('./api-retranslator');

const handlerRegistrator = (url, app, handler) => {
    if (handler.get) {
        app.get(url, handler.get);
    }
    if (handler.post) {
        app.post(url, handler.post);
    }
};

module.exports = app => {
    app.get('/api/teams/:id/players', apiRetranslator(require('./api-configs/team-players')));
    app.get('/api/teams/:id/fixtures', apiRetranslator(require('./api-configs/team-fixtures')));
    app.get('/api/teams/:id/info', apiRetranslator(require('./api-configs/team-info')));
    app.get('/api/teams/:id', apiRetranslator(require('./api-configs/teams')));
    app.get('/api/table/:id', apiRetranslator(require('./api-configs/league-table')));
    app.get('/api/fixture/:id', apiRetranslator(require('./api-configs/fixture')));
    app.get('/api/twitter/:tag', apiRetranslator(require('./api-configs/twitter-tag-search')));


    handlerRegistrator('/api/user/login', app, require('./handlers/login-handler'));
    handlerRegistrator('/api/user/register', app, require('./handlers/register-handler'));
    handlerRegistrator('/api/user/logout', app, require('./handlers/logout-handler'));
    handlerRegistrator('/api/user/', app, require('./handlers/user-handler'));
    handlerRegistrator('/api/favorites/', app, require('./handlers/favorites-handler'));
};

