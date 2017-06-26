import template from 'components/header-navigation/header-navigation.html';
import ko from 'knockout';
import register from 'components/component-registrator';

class ViewModel {
    constructor() {
        this.links = [
            {
                text: 'league table',
                reference: '#league'
            },{
                text: 'teams',
                reference: '#teams'
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

register('header-navigation', ViewModel, template);
