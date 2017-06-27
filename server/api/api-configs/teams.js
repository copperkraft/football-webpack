const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params: params => {
        return paramsBuilder(`competitions/${params.id}/teams`, true);
    },
    mapper: data => {
        return data.teams;
    }
};