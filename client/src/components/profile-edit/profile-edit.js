import ko from 'knockout';

import template from 'components/profile-edit/profile-edit.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import {showSuccessAlert, showErrorAlert} from 'utils/notifications';

class ProfileEditViewModel {
    constructor() {
        userProvider.get();
        this.user = userProvider.currentUser;

        this.name = ko.observable();
        this.birthDate = ko.observable();
        this.fixtureSubscription = this.user.subscribe(value => {
            if (value) {
                this.name(value.name);
                this.birthDate(value.birthDate);
            }
        });
    }

    dispose() {
        this.fixtureSubscription.dispose();
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