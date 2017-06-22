const rp = require('request-promise-native');


const T = {
    consumer_key: 'Qu6V0uhsDglEwSGL825maZk1x',
    consumer_secret: 'iS7t0xhts6GmwTZajcUfLAe5zoStcaX5FZG5H79X9m2fMSlzd1',
};

/*POST /oauth2/token HTTP/1.1 */

const b64Credentials = new Buffer(T.consumer_key + ':' + T.consumer_secret).toString('base64');

const options = {
    uri: 'https://api.twitter.com/oauth2/token',
    body: 'grant_type=client_credentials',
    headers: {
        'Authorization': 'Basic ' + b64Credentials,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    json: true
};





rp.post(options)
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err.message);
    });