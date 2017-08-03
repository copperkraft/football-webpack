import React from 'react';
import PropTypes from 'prop-types';

import './tweet-card.less';

import Tweet from 'models/tweet/tweet';

export default function TweetCard(props) {
    const tweet = props.tweet;

    return (
        <div className="tweet-card">
            <div className="tweet-card__heading">
                @{tweet.user} at {tweet.time.toDateString()}
            </div>
            <div className="tweet-card__text">
                {tweet.text}
            </div>
        </div>
    );
}

TweetCard.propTypes = {
    tweet: PropTypes.instanceOf(Tweet).isRequired
};