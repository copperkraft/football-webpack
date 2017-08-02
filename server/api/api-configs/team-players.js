const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params(params) {
        return paramsBuilder(`teams/${params.id}/players`, true);
    },
    mapper(data) {
        return {
            list: data.players.sort((left, right) => left.jerseyNumber > right.jerseyNumber ? 1 : -1)
        };
    },
    paging: true
};