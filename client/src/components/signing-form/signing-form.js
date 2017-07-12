import ko from 'knockout';

import 'components/signing-form/signing-form.less';
import template from 'components/signing-form/signing-form.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import modes from 'constants/formModes';

class UserActionsViewModel {
    constructor(params) {
        this.mode = params.mode;
        this.user = params.user;
        this.mode(modes[0]);
        this.password = ko.observable('');
        this.email = ko.observable('');
        this.name = ko.observable('');
    }

    isSignUp() {
        return this.mode() === modes[1];
    }


    toggleMode() {
        this.mode(this.mode() === modes[1] ? modes[0] : modes[1]);
    }

    submit() {
        if (this.isSignUp()) {
            userProvider.register({
                email: this.email(),
                password: this.password(),
                name: this.name()
            })
                .then(data => this.user(data))
                .catch(error => console.error(error));
        } else {
            userProvider.logIn({
                email: this.email(),
                password: this.password()
            })
                .then(data => this.user(data))
                .catch(error => console.log(error));
        }
    }
}

register('signing-form', template, UserActionsViewModel);
