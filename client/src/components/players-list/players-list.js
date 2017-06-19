import ko from 'knockout';

import template from 'components/players-list/players-list.html';

import {teamPlayers} from 'models/team-players';


class TeamsViewModel {
    constructor(params) {
        this.players = teamPlayers.get(params.id);
        this.pageSize = ko.observable(5);
        this.currentPage = ko.observable(0);
        this.pageCount = ko.computed(() => Math.ceil(this.players().length / this.pageSize()));
        this.displayedPlayers = ko.computed(() => this.players().filter((item, index) => {
            return index >= this.currentPage() * this.pageSize() && index < (this.currentPage() + 1) * this.pageSize();
        }));
    }

    toFirstPage() {
        return this.currentPage(0);
    }

    previousPage() {
        return this.currentPage(this.currentPage() > 0 ? this.currentPage() - 1 : 0);
    }

    nextPage() {
        return this.currentPage(this.pageCount() - 1 > this.currentPage() ? this.currentPage() + 1 : this.currentPage());
    }

    toLastPage() {
        return this.currentPage(this.pageCount() - 1);
    }
}
export {TeamsViewModel as viewModel, template};