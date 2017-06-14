import ko from 'knockout';

import {tweetsRepository} from 'data/tweets-repository';

export const tweets = {
    get: tag => {
        const tweets = ko.observableArray();
        if (tag) {
            tweetsRepository.get(tag).then(data => tweets(data));
        }
        return tweets;
    }
};