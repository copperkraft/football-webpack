/**
 * Created by uladzimir.yakushkin on 31-May-17.
 */
const template = require('components/router/router.html');
const ko = require('knockout');
const routes = require('components/routes');

function RouterViewModel() {
    const routedComponents = ko.observable({});
    routes.forEach(route => {routedComponents[route.path] = {component: route.component}});

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

module.exports = { viewModel: RouterViewModel, template: template };
