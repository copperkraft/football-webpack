module.exports = app => {
    app.get('/api/table/:id', require('./league-table'));
    app.get('/api/teams/:id', require('./teams'));
};

