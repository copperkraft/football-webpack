const apiRetranslator = require('./api-retranslator');

module.exports = app => {
    app.get('/api/teams/:id', apiRetranslator('teams', data => data.teams));
    app.get('/api/table/:id', apiRetranslator('league-table', data => data.standing));
};

