import './info-tab.less';
import template from 'components/info-tab/info-tab.html';

class TeamsViewModel {
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
    }
}
export {TeamsViewModel as viewModel, template};