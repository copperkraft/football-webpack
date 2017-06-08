import template from 'components/router/router.html';
import ko from 'knockout';
import routes from 'components/routes';

function RouterViewModel() {
    const routedComponents = ko.observableArray(routes.map(route => {
        return {
            path: route.path.match(/\/\w+/g).map(item => {
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
    routes.forEach(route => routedComponents[route.path] = {component: route.component});

    this.url = ko.observable();
    this.route = ko.observableArray();

    this.calculateRoute = function () {
        const path = '/'+ location.hash.slice(1);
        this.route(location.hash.length > 0 ? path.match(/\/\w+/g).map(parameter => parameter.slice(1)): []);
        this.url(location.hash.slice(1) || '/');
    };

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
            return matchingComponent.component;
        }
        location.hash = 'league';
    }, this);
}

export {RouterViewModel as viewModel, template};
