const rp = require('request-promise-native');

module.exports = (config) => (request, response) => {
    rp(config.params(request.params)).then(data => {
        response.send(config.converter ? config.converter(data) : data);
    });
};
