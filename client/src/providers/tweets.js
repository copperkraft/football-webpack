import ko from 'knockout';

import Tweet from 'models/tweet';
import {tweetsRepository} from 'data/tweets-repository';

export const tweets = {
    get: tag => {
        const tweets = ko.observableArray();
        if (tag) {
            tweetsRepository.get(tag).then(data => tweets(data.map(item => new Tweet(item))));
        }
        return tweets;
    }
};