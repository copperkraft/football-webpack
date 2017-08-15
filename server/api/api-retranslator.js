const rp = require('request-promise-native');
const paging = require('./paging');

module.exports = (config) => (request, response) => {
    config.params(request.params).then(params => {
        rp(params)
            .then(data => config.mapper ? config.mapper(data) : data)
            .then(data => config.filter ? config.filter(data, request.query.filters) : data)
            .then(data => config.paging ? paging(data, request.query.paging) : data)
            .then(data => response.send(data))
            .catch(err => {
                switch (err.statusCode) {
                    case 403:
                        response.sendStatus(403);
                        break;
                    default:
                        response.sendStatus(500);
                }
                console.error(err.message + ' error occur while fetching data from api');
            });
    });
};
