import ko from 'knockout';


import 'components/signing-form/signing-form.less';
import template from 'components/signing-form/signing-form.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import modes from 'constants/formModes';
import 'knockout.validation';
import notie from 'notie';


class UserActionsViewModel {
    constructor(params) {
        ko.validation.init();
        this.mode = params.mode;
        this.user = params.user;
        this.mode(modes[0]);
        this.password = ko.observable('').extend({required: true, minLength: 3.5});
        this.email = ko.observable('').extend({required: true, email: true});
        this.name = ko.observable('').extend({required: true});
    }

    isSignUp() {
        return this.mode() === modes[1];
    }

    toggleMode() {
        this.mode(this.mode() === modes[1] ? modes[0] : modes[1]);
    }

    submit() {
        this.checkInput();
        if (this.isSignUp()) {
            userProvider.register({
                email: this.email(),
                password: this.password(),
                name: this.name()
            })
                .then(() => this.showSuccessAlert('user created'))
                .catch(() => this.showErrorAlert('email is incorrect or already taken'));
        } else {
            userProvider.logIn({
                email: this.email(),
                password: this.password()
            })
                .then(() => this.showSuccessAlert('success'))
                .catch(() => this.showErrorAlert('wrong email or password'));
        }
    }

    showSuccessAlert(text) {
        notie.alert({
            type: 'success',
            text: text || 'success',
            time: 1
        });
    }

    showErrorAlert(text) {
        notie.alert({
            type: 'error',
            text: text || 'error',
            time: 3
        });
    }
}

register('signing-form', template, UserActionsViewModel);
