const paramsBuilder = require('./football-api-params-builder');

module.exports = {
    params: params => {
        return paramsBuilder(`competitions/${params.id}/teams`, true);
    },
    converter: data => {
        return data.teams;
    }
};