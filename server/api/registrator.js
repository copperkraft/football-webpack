const apiRetranslator = require('./api-retranslator');

module.exports = app => {
    app.get('/api/teams/:id/players', apiRetranslator(require('./api-configs/team-players')));
    app.get('/api/teams/:id/fixtures', apiRetranslator(require('./api-configs/team-fixtures')));
    app.get('/api/teams/:id/info', apiRetranslator(require('./api-configs/team-info')));
    app.get('/api/teams/:id', apiRetranslator(require('./api-configs/teams')));
    app.get('/api/table/:id', apiRetranslator(require('./api-configs/league-table')));
    app.get('/api/fixture/:id', apiRetranslator(require('./api-configs/fixture')));
    app.get('/api/twitter/:tag', apiRetranslator(require('./api-configs/twitter-tag-search')));

    require('./handlers/login-handler')(app, '/api/user/login');
    require('./handlers/register-handler')(app, '/api/user/register');
    require('./handlers/logout-handler')(app, '/api/user/logout');
    require('./handlers/user-handler')(app, '/api/user/');
    require('./handlers/favorites-handler')(app, '/api/favorites/');
};

