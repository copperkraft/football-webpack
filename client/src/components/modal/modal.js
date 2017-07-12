import ko from 'knockout';

import './modal.less';
import template from 'components/modal/modal.html';
import register from 'components/component-registrator';
import 'bindings/exact-click';

class ModalViewModel {
    constructor(params) {
        this.comp = params.comp || {};
        this.data = params.data || {};
        this.isVisible = params.visible || ko.observable(false);
        this.parentComponent = params.parentComponent;
    }
    hide() {
        this.isVisible(false);
    }
}

register('modal', template, ModalViewModel);