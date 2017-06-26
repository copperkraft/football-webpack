import ko from 'knockout';

import './tweets-block.less';
import template from 'components/tweets-block/tweets-block.html';

import {tweets} from 'providers/tweets';

class TeamsViewModel {
    constructor(params) {
        this.tag = params.tag;
        this.tweets = ko.observable([]);
        tweets.get(this.tag).then(data => this.tweets(data));
    }
}
export {TeamsViewModel as viewModel, template};