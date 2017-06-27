import tweetMapper from 'models/tweet/tweet-mapper';
import {tweetsRepository} from 'data/tweets-repository';

export const tweets = {
    get(tag) {
        if (tag) {
            return tweetsRepository.get(tag).then(data => data.map(tweetMapper));
        }
    }
};