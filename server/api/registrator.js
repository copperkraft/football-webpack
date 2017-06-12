const apiRetranslator = require('./api-retranslator');

module.exports = app => {
    app.get('/api/teams/:id/players', apiRetranslator(require('./api-configs/team-players')));
    app.get('/api/teams/:id/fixtures', apiRetranslator(require('./api-configs/team-fixtures')));
    app.get('/api/teams/:id', apiRetranslator(require('./api-configs/teams')));
    app.get('/api/table/:id', apiRetranslator(require('./api-configs/league-table')));
};

