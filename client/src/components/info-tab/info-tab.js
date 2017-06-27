import './info-tab.less';
import template from 'components/info-tab/info-tab.html';
import register from 'components/component-registrator';

import 'components/players-list/players-list';
import 'components/tweets-block/tweets-block';

class ViewModel {
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
    }
}

register('info-tab', null, template);