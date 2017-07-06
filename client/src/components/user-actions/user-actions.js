import ko from 'knockout';

import 'components/user-actions/user-actions.less';
import template from 'components/user-actions/user-actions.html';
import register from 'components/component-registrator';

import {user} from 'providers/user-provider';
import 'components/modal/modal';
import 'components/signing-form/signing-form';

class UserActionsViewModel {
    constructor() {
        this.user = ko.observable();
        this.isAuthorised = ko.observable(false);
        this.isFormOpened = ko.observable(false);
        this.formMode = ko.observable('sign-in');
        user.get().then(data => {
            this.user(data);
        });
        this.user.subscribe(value => {
            if(value) {
                this.isFormOpened(false);
            }
        });
    }

    logOut() {
        user.logout();
        this.user(null);
    }

    openForm (interactionType) {
        this.formMode(interactionType);
        this.isFormOpened(true);
    }
}

register('user-actions', template, UserActionsViewModel);