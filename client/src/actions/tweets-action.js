import {tweets} from 'providers/tweets-provider';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
function requestTweets(tag) {
    return {
        type: REQUEST_TWEETS,
        payload: tag
    };
}

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        payload: tweets
    };
}

export function fetchTweets(tag) {
    return function(dispatch) {
        dispatch(requestTweets(tag));
        return tweets.get(tag).then(tweets => {
            dispatch(receiveTweets(tweets));
        });
    };
}