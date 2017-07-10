import './profile-page.less';
import template from 'components/profile-page/profile-page.html';
import register from 'components/component-registrator';

import {user} from 'providers/user-provider';

class ProfilePageViewModel {
    constructor() {
        this.user = user.currentUser;
        user.get();
        this.user.subscribe(value => {
            console.log(value);
        });
    }
}

register('profile-page', template, ProfilePageViewModel);