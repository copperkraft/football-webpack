const rp = require('request-promise-native');

const keys = {
    consumer_key: 'Qu6V0uhsDglEwSGL825maZk1x',
    consumer_secret: 'iS7t0xhts6GmwTZajcUfLAe5zoStcaX5FZG5H79X9m2fMSlzd1'
};

const b64Credentials = new Buffer(keys.consumer_key + ':' + keys.consumer_secret).toString('base64');

const options = {
    uri: 'https://api.twitter.com/oauth2/token',
    body: 'grant_type=client_credentials',
    headers: {
        'Authorization': 'Basic ' + b64Credentials,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    json: true
};
module.exports = rp.post(options);