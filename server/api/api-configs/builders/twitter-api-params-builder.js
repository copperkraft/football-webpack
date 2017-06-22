const tokenAccessor = require('./twitter-token-accessing');

module.exports = (url) => {
    return tokenAccessor.then(data => {
        return {
            uri: `https://api.twitter.com/1.1/${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + data.access_token
            },
            json: true
        };
    });
};