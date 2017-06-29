import ko from 'knockout';

import template from 'components/router/router.html';
import register from 'components/component-registrator';

import routedComponents from 'components/component-routes';
import 'components/header-navigation/header-navigation';
import routeNames from 'constants/routes';

class RouterViewModel {
    constructor() {
        this.url = ko.observable();
        this.component = ko.observable();

        window.addEventListener('hashchange', this.findComponent.bind(this));
        window.addEventListener('load', this.findComponent.bind(this));
    }

    findComponent() {
        this.url(location.hash.slice(1) || '');
        const routeParts = this.url().split('/');

        const matchingComponent = routedComponents.find(item => {
            if (item.path.length === routeParts.length) {
                return item.path.every((part, position) => {
                    if (part.type === 'constant') {
                        return part.name === routeParts[position];
                    }
                    return true;
                });
            }
            return false;
        });

        if (matchingComponent) {
            this.component({
                name: matchingComponent.component,
                params: matchingComponent.path.reduce((params, part, index) => {
                    if (part.type === 'parameter') {
                        params[part.name] = this.route()[index];
                    }
                    return params;
                }, {})
            });
        } else {
            location.hash = `#${routeNames.leagueTablePage}`;
        }
    }
}

register('router', template, RouterViewModel);