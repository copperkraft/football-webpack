const rp = require('request-promise');
const apiConfig = require('./api-configs');

module.exports = (params) => rp(params);