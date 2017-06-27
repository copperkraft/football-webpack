import Tweet from 'models/tweet';
import {tweetsRepository} from 'data/tweets-repository';

export const tweets = {
    get(tag) {
        if (tag) {
            return tweetsRepository.get(tag).then(data => data.map(item => new Tweet(item)));
        }
    }
};