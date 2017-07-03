import ko from 'knockout';

import './modal.less';
import template from 'components/modal/modal.html';
import register from 'components/component-registrator';

class ModalViewModel {
    constructor(params) {
        this.data = params.data || {};
        this.isVisible = params.visible || ko.observable(false);
        this.parentComponent = params.parentComponent;
    }
    hide(viewModel, event) {
        if (event.target.className.indexOf('modal--visible') !== -1) {
            this.isVisible(false);
        }
    }
}

register('modal', template, ModalViewModel);