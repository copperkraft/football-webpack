import ko from 'knockout';

import template from 'components/tweets-block/tweets-block.html';

import {tweets} from 'models/tweets';

function TeamsViewModel(params) {
    this.tag = params.tag;
    console.log(this.tag);
    this.tweets = tweets.get(this.tag);
}
export {TeamsViewModel as viewModel, template};