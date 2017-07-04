import ko from 'knockout';

import 'components/signing-form/signing-form.less';
import template from 'components/signing-form/signing-form.html';
import register from 'components/component-registrator';

import {user} from 'providers/user-provider';



class UserActionsViewModel {
    constructor(params) {
        this.mode = params.mode;
        console.log(this.mode);
        this.mode('sign-in');
        this.password = ko.observable('');
        this.email = ko.observable('');
    }

    isSignUp() {
        return this.mode() === 'sign-up';
    }

    toggleMode() {
        this.mode(this.mode() === 'sign-up' ? 'sign-in' : 'sign-up');
    }

    submit() {
        if (this.isSignUp()) {
            user.register({
                email: this.email,
                password: this.password
            }).then(data => console.log(data))
                .catch(error => console.error(error));
        } else {
            console.log({
                email: this.email(),
                password: this.password()
            });
            user.logIn({
                email: this.email(),
                password: this.password()
            }).then(data => console.log(data))
                .catch(error => console.log(error));
        }
    }
}

register('signing-form', template, UserActionsViewModel);
