import ko from 'knockout';

import template from 'components/info-tab/tweets-block.html';

function TeamsViewModel(params) {
    this.tag = params.tag;
    this.tweets = ko.observable(() => {
        return [
            {
                header: 'metadata',
                text: 'first tweet'
            }, {
                header: 'metadata',
                text: 'first tweet'
            }, {
                header: 'metadata',
                text: 'first tweet'
            }
        ];
    });
}
export {TeamsViewModel as viewModel, template};