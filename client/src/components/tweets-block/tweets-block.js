import template from 'components/tweets-block/tweets-block.html';

import {tweets} from 'models/tweets';

function TeamsViewModel(params) {
    this.tag = params.tag;
    this.tweets = tweets.get(this.tag);
}
export {TeamsViewModel as viewModel, template};