import ko from 'knockout';

import template from 'components/header-navigation/header-navigation.html';
import register from 'components/component-registrator';

import routeNames from 'constants/routes';

class HeaderNavigationViewModel {
    constructor(params) {
        this.links = [
            {
                text: 'league table',
                reference: `#${routeNames.leagueTablePage}`
            },{
                text: 'teams',
                reference: `#${routeNames.leagueTeamsPage}`
            }
        ];
        this.url = params.url;
    }

    isCurrent(url) {
        return url === `#${this.url()}`;
    }
}

register('header-navigation', template, HeaderNavigationViewModel);
