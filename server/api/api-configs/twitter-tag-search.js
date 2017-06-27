const paramsBuilder = require('./builders/twitter-api-params-builder');

module.exports = {
    params: params => {
        return paramsBuilder(`search/tweets.json?q=%23${params.tag}&count=10`, true);
    },
    mapper: result => result.statuses.map(tweet => {
        return {
            text: tweet.text,
            user: tweet.user.screen_name,
            time: new Date(tweet.created_at)
        };
    })
};