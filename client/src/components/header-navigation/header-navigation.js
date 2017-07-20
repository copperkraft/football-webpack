import ko from 'knockout';

import template from 'components/header-navigation/header-navigation.html';
import register from 'components/component-registrator';

import {routes} from 'constants/routes';
import 'components/user-actions/user-actions';

class HeaderNavigationViewModel {
    constructor() {
        this.links = [
            {
                text: 'league table',
                reference: `#${routes.leagueTablePage}`
            }, {
                text: 'teams',
                reference: `#${routes.leagueTeamsPage}`
            }
        ];
        this.url = ko.observable(location.hash);
        window.addEventListener('hashchange', () => {
            this.url(location.hash);
        });
    }

    isCurrent(url) {
        return url === this.url();
    }
}

register('header-navigation', template, HeaderNavigationViewModel);
