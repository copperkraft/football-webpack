import ko from 'knockout';

import 'components/signing-form/signing-form.less';
import template from 'components/signing-form/signing-form.html';
import register from 'components/component-registrator';

//import {user} from 'providers/user-provider';

class UserActionsViewModel {
    constructor(params) {
        this.mode = params.mode;
        this.password = ko.observable('');
        this.email = ko.observable('');
    }
}

register('signing-form', template, UserActionsViewModel);
