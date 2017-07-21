const rp = require('request-promise-native');
const paging = require('./paging');

module.exports = (config) => (request, response) => {
    config.params(request.params).then(params => {
        rp(params)
            .then(data => config.mapper ? config.mapper(data) : data)
            .then(data => config.filter ? config.filter(data, request.query.filters) : data)
            .then(data => config.paging ? paging(data, request.query.paging) : data)
            .then(data => response.send(data))
            .catch(err => console.log(err.message + ' ...while fetching data from api ' + params));
    });
};
