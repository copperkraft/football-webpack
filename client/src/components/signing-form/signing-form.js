import ko from 'knockout';


import 'components/signing-form/signing-form.less';
import template from 'components/signing-form/signing-form.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import modes from 'constants/formModes';
import 'knockout.validation';
import {showSuccessAlert, showErrorAlert} from 'utils/notifications';


class UserActionsViewModel {
    constructor(params) {
        ko.validation.init();
        this.mode = params.mode;
        this.user = params.user;
        this.mode(modes[0]);
        this.password = ko.observable('').extend({required: true, minLength: 3.5});
        this.email = ko.observable('').extend({required: true, email: true});
        this.name = ko.observable('').extend({required: true});
        this.isDataValid = ko.computed(() => {
            return this.password.isValid() && this.email.isValid() &&
            (this.name.isValid() || !this.isSignUp());
        });
    }

    isSignUp() {
        return this.mode() === modes[1];
    }

    toggleMode() {
        this.mode(this.mode() === modes[1] ? modes[0] : modes[1]);
        this.password('');
        this.email('');
        this.name('');
    }

    submit() {
        if(!this.isDataValid()) {
            showErrorAlert('invalid input');
            return;
        }
        if (this.isSignUp()) {
            userProvider.register({
                email: this.email(),
                password: this.password(),
                name: this.name()
            })
                .then(() => showSuccessAlert('user created'))
                .catch(() => showErrorAlert('request error'));
        } else {
            userProvider.logIn({
                email: this.email(),
                password: this.password()
            })
                .then(() => showSuccessAlert('user authorized'))
                .catch(() => showErrorAlert('request error'));
        }
    }
}

register('signing-form', template, UserActionsViewModel);
