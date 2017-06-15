import ko from 'knockout';

import template from 'components/players-list/players-list.html';

import {teamPlayers} from 'models/team-players';


function TeamsViewModel(params) {
    this.players = teamPlayers.get(params.id);
    this.pageSize = ko.observable(5);
    this.currentPage = ko.observable(0);
    this.pageCount = ko.computed(() => Math.ceil(this.players().length / this.pageSize()));
    this.nextPage = () => this.currentPage(this.pageCount() - 1 > this.currentPage() ? this.currentPage() + 1 : this.currentPage());
    this.previousPage = () => this.currentPage(this.currentPage() > 0 ? this.currentPage() - 1 : 0);
    this.toFirstPage = () => this.currentPage(0);
    this.toLastPage = () => this.currentPage(this.pageCount() - 1);
    this.displayedPlayers = ko.computed(() => this.players().filter((item, index) => {
        return index >= this.currentPage() * this.pageSize() && index < (this.currentPage() + 1) * this.pageSize();
    }));
}
export {TeamsViewModel as viewModel, template};