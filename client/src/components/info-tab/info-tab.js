import './info-tab.less';
import template from 'components/info-tab/info-tab.html';
import register from 'components/component-registrator';

class ViewModel {
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
    }
}

register('info-tab', ViewModel, template);