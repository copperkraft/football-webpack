const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params: params => {
        return paramsBuilder(`competitions/${params.id}/leagueTable`);
    },
    converter: data => {
        return data.standing;
    }
};