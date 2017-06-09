const rp = require('request-promise');
const apiConfig = require('./api-configs');

module.exports = (api, params) => rp(apiConfig[api](params));