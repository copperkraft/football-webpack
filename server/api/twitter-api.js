const Twit = require('twit-promise');

const T = new Twit({
    consumer_key: 'Qu6V0uhsDglEwSGL825maZk1x',
    consumer_secret: 'iS7t0xhts6GmwTZajcUfLAe5zoStcaX5FZG5H79X9m2fMSlzd1',
    app_only_auth: true
});

module.exports = (request, response) => {
    console.log(request.params);
    T.get('search/tweets', { q: '#' + request.params.tag.replace(/ /g, ''), count: 5 })
        .then(result => result.data.statuses.map(tweet => {
            const date = new Date(tweet.created_at);
            return {
                text: tweet.text,
                user: tweet.user.screen_name,
                time: `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
            };
        }))
        .then(result => {
            response.send(result);
        });
};

