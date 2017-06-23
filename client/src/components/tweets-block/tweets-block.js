import './tweets-block.less';
import template from 'components/tweets-block/tweets-block.html';

import {tweets} from 'providers/tweets';

class TeamsViewModel {
    constructor(params) {
        this.tag = params.tag;
        this.tweets = tweets.get(this.tag);
    }
}
export {TeamsViewModel as viewModel, template};