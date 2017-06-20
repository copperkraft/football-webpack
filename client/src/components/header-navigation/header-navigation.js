import template from 'components/header-navigation/header-navigation.html';
import ko from 'knockout';

class HeaderViewModel {
    constructor() {
        this.url = ko.observable(location.hash);
        window.addEventListener('hashchange', () => {
            this.url(location.hash);
        });
    }
}

export {HeaderViewModel as viewModel, template};
