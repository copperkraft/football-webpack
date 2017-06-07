import template from 'components/router/router.html';
import ko from 'knockout';
import routes from 'components/routes';

function RouterViewModel() {
    const routedComponents = ko.observable({});
    routes.forEach(route => routedComponents[route.path] = {component: route.component});

    this.url = ko.observable();

    this.calculateRoute = function () {
        this.url(location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', this.calculateRoute.bind(this));
    window.addEventListener('load', this.calculateRoute.bind(this));

    this.page = ko.pureComputed(function () {
        if (routedComponents[this.url()]) {
            return this.url();
        } else {
            location.hash = 'league';
        }
    }, this);
}

export {RouterViewModel as viewModel, template};
