import template from 'components/router/router.html';
import register from 'components/component-registrator';

import ko from 'knockout';
import routes from 'components/routes';

import 'components/header-navigation/header-navigation';

class RouterViewModel {
    constructor() {
        const routedComponents = ko.observableArray(routes.map(route => {
            return {
                path: route.path.match(/\/:?\w+/g).map(item => {
                    return item[1] === ':' ? {
                        type: 'parameter',
                        name: item.slice(2)
                    } : {
                        type: 'constant',
                        name:  item.slice(1)
                    };
                }),
                component: route.component
            };
        }
        ));

        this.url = ko.observable();
        this.route = ko.observableArray();

        this.calculateRoute();
        window.addEventListener('hashchange', this.calculateRoute.bind(this));
        window.addEventListener('load', this.calculateRoute.bind(this));

        this.page = ko.pureComputed(function () {
            const matchingComponent = routedComponents().find(item => {
                if (item.path.length === this.route().length) {
                    return item.path.every((part, position) => {
                        if (part.type === 'constant') {
                            return part.name === this.route()[position];
                        }
                        return true;
                    });
                }
                return false;
            });
            if (matchingComponent) {
                return {
                    name: matchingComponent.component,
                    params: matchingComponent.path.reduce((params, part, index) => {
                        if (part.type === 'parameter') {
                            params[part.name] = this.route()[index];
                        }
                        return params;
                    }, {})
                };
            }
            location.hash = 'league';
        }, this);
    }

    calculateRoute() {
        const path = '/' + location.hash.slice(1);
        this.route(location.hash ? path.match(/\/\w+/g).map(item => item.slice(1)) : []);
        this.url(location.hash.slice(1) || '/');
    }
}

register('router', RouterViewModel, template);