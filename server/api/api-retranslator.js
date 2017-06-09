const apiExternalRequest = require('./api-external-request');

module.exports = (api, converter) => (request, response) => {
    console.log('using ' + api);
    apiExternalRequest(api, request.params).then(data => {
        response.send(converter ? converter(data) : data);
    });
};
