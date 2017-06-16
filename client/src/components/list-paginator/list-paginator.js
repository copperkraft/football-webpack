import ko from 'knockout';

import template from 'components/list-paginator/list-paginator.html';

class TeamsViewModel {
    constructor(params) {
        console.log(params);
        this.array = params.array;
        this.pageSize = params.pageSize || 10;
        this.currentPage = ko.observable(0);
        this.pageCount = Math.ceil(params.array.length / this.pageSize);

        this.displayedPlayers = ko.pureComputed(() => this.players().filter((item, index) => {
            return index >= this.currentPage() * this.pageSize() && index < (this.currentPage() + 1) * this.pageSize();
        }));
    }

    goToPreviousPage() {
        if (this.currentPage() > 0) {
            this.currentPage(this.currentPage() - 1);
        }
    }

    goToNextPage() {
        if (this.pageCount - 1 > this.currentPage()) {
            this.currentPage(this.currentPage() + 1);
        }
    }

    goToFirstPage() {
        return this.currentPage(0);
    }

    goToLastPage() {
        return this.currentPage(this.pageCount - 1);
    }
}

export {TeamsViewModel as viewModel, template};