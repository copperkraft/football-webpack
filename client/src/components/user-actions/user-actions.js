import ko from 'knockout';

import 'components/user-actions/user-actions.less';
import template from 'components/user-actions/user-actions.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import modes from 'constants/formModes';
import 'components/modal/modal';
import 'components/signing-form/signing-form';

class UserActionsViewModel {
    constructor() {
        this.user = userProvider.currentUser;
        this.isFormOpened = ko.observable(false);
        this.formMode = ko.observable('sign-in');
        userProvider.get();
        this.userSubscription = this.user.subscribe(value => {
            if (value) {
                this.isFormOpened(false);
            }
        });
    }

    dispose() {
        this.userSubscription.dispose();
    }

    logOut() {
        userProvider.logout();
    }

    openSignInForm() {
        this.formMode(modes[0]);
        this.isFormOpened(true);
    }

    openSignUpForm() {
        this.formMode(modes[1]);
        this.isFormOpened(true);
    }
}

register('user-actions', template, UserActionsViewModel);