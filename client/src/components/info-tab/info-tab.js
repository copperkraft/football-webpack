import template from 'components/info-tab/info-tab.html';

function TeamsViewModel(params) {
    this.id = params.id;
    this.name = params.name;
}
export {TeamsViewModel as viewModel, template};