import ko from 'knockout';

import './tweets-block.less';
import template from 'components/tweets-block/tweets-block.html';
import register from 'components/component-registrator';

import {tweets} from 'providers/tweets-provider';

class TwitterBlockViewModel {
    constructor(params) {
        this.tag = params.tag;
        this.tweets = ko.observable();
        tweets.get(this.tag).then(data => this.tweets(data));
    }
}

register('tweets-block', template, TwitterBlockViewModel);