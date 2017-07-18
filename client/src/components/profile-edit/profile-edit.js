import ko from 'knockout';

import './profile-edit.less';
import template from 'components/profile-edit/profile-edit.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import {showSuccessAlert, showErrorAlert} from 'utils/notifications';

class ProfileEditViewModel {
    constructor() {
        this.user = userProvider.currentUser;
        userProvider.get();
        this.name = ko.observable();
        this.birthDate = ko.observable();
        this.user.subscribe(value => {
            if (value) {
                this.name(value.name);
                this.birthDate(value.birthDate);
            }
        });
    }

    save() {
        userProvider.set({
            birthDate: (new Date(this.birthDate())).toISOString(),
            name: this.name()
        })
            .then(() => showSuccessAlert('user information saved'))
            .catch(() => showErrorAlert('error while saving information'));
    }
}

register('profile-edit', template, ProfileEditViewModel);