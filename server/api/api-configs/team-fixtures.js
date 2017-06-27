const paramsBuilder = require('./builders/football-api-params-builder');

module.exports = {
    params: params => {
        return paramsBuilder(`teams/${params.id}/fixtures`, true);
    },
    mapper: data => {
        return data.fixtures;
    }
};