const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params(params) {
        return paramsBuilder(`competitions/${params.id}/leagueTable`);
    },
    mapper(data) {
        return data.standing;
    }
};