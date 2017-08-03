import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Title from 'components/title/title';
import {fetchTweets} from '../actions/tweets-action';
import TweetCard from 'components/tweet-card/tweet-card';
import Spin from 'components/spinner/spinner';

class TwitterBlock extends Component {
    componentDidMount() {
        const {tag, dispatch} = this.props;
        dispatch(fetchTweets(tag));
    }

    render() {
        const {tweets, tag} = this.props;
        return (
            <div>
                <Title text={'Tweets for tag #' + tag}/>
                {tweets.isFetching
                    ? <Spin/>
                    : tweets.items.map(tweet => <TweetCard key={tweet.time} tweet={tweet}/>)
                }
            </div>
        );
    }
}

TwitterBlock.propTypes = {
    tag: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {tweets: state.tweets};
}

export default connect(mapStateToProps)(TwitterBlock);

