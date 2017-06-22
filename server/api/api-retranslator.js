const rp = require('request-promise-native');

module.exports = (config) => (request, response) => {
    config.params(request.params).then(params => {
        rp(params).then(data => {
            response.send(config.converter ? config.converter(data) : data);
        }).catch(err => console.log(err.message + ' ...while fetching data from api'));
    });
};
