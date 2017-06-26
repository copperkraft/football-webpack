import template from 'components/header-navigation/header-navigation.html';
import ko from 'knockout';
import register from 'components/component-registrator';

class ViewModel {
    constructor() {
        this.url = ko.observable(location.hash);
        window.addEventListener('hashchange', () => {
            this.url(location.hash);
        });
    }
}

register('header-navigation', ViewModel, template);
