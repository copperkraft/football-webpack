import ko from 'knockout';

import 'components/user-actions/user-actions.less';
import template from 'components/user-actions/user-actions.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import 'components/modal/modal';
import 'components/signing-form/signing-form';

class UserActionsViewModel {
    constructor() {
        this.user = userProvider.currentUser;
        this.isFormOpened = ko.observable(false);
        this.formMode = ko.observable('sign-in');
        userProvider.get();
        this.user.subscribe(value => {
            if(value) {
                this.isFormOpened(false);
            }
        });
    }

    logOut() {
        userProvider.logout();
    }

    openForm (interactionType) {
        this.formMode(interactionType);
        this.isFormOpened(true);
    }
}

register('user-actions', template, UserActionsViewModel);