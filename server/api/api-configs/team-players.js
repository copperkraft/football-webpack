const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params(params) {
        return paramsBuilder(`teams/${params.id}/players`, true);
    },
    mapper(data) {
        return data.players.sort((left, right) => left > right ? 1 : -1);
    }
};