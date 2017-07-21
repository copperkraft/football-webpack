import ko from 'knockout';

import template from 'components/profile-page/profile-page.html';
import register from 'components/component-registrator';

import {userProvider} from 'providers/user-provider';
import {favorites} from 'providers/favorites-provider';

class ProfilePageViewModel {
    constructor() {
        this.user = userProvider.currentUser;
        userProvider.get();
        this.favorites = ko.observableArray();
        favorites.get().then(data => this.favorites(data));
    }
}

register('profile-page', template, ProfilePageViewModel);